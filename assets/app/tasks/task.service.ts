import { Http, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";

import { Task } from "./task";

@Injectable()
export class TaskService {
    tasks: Task[] = [];
    taskIsEdit = new EventEmitter<Task>();
    
    constructor (private _http: Http) {}

    addTask(task: Task) {
        const body = JSON.stringify(task);
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
    
        return this._http.post('http://localhost:3000/task' + token, body, {headers: headers})
            .map(response => {
                const data = response.json().obj;
                let task = new Task(data.content, data._id, data.user.firstName, data.user._id);
                return task;
            })
            .catch(error => Observable.throw(error));
    }

    getTasks() {
        return this._http.get('http://localhost:3000/task')
            .map(response => {
                const data = response.json().obj;
                let objs: any[] = [];
                for (let i = 0; i < data.length; i++) {
                    let task = new Task(data[i].content, data[i]._id, data[i].user.firstName, data[i].user._id);
                    objs.unshift(task);
                };
                return objs;
            })
            .catch(error => Observable.throw(error));
    }

    updateTask(task: Task) {
        const body = JSON.stringify(task);
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        
        return this._http.patch('http://localhost:3000/task/' + task.taskId + token, body, {headers: headers})
            .map(response => response.json())
            .catch(error => Observable.throw(error));
    }

    editTask(task: Task) {
        this.taskIsEdit.emit(task);
    }

    deleteTask(task: Task) {
        this.tasks.splice(this.tasks.indexOf(task), 1);
        const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        
        return this._http.delete('http://localhost:3000/task/' + task.taskId + token)
            .map(response => response.json())
            .catch(error => Observable.throw(error));
    }
}
