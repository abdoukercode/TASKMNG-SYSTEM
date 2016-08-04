import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Task } from "./task";

import { TaskService } from "./task.service";

@Component({
    selector: 'my-task',
    template: `
        <article class="panel panel-default">
            <div class="panel-body">
                {{ task.content }}
            </div>
            <footer class="panel-footer">
                <div class="author">
                    {{ task.username }}
                </div>
                <div class="config" *ngIf="belongsToUser()">
                
                    <a (click)="onEdit()"><i class="glyphicon glyphicon-edit " ></i></a>
                      <i (click)="onDelete()" class="glyphicon glyphicon-remove clickable"></i>
                    
                </div>
            </footer>
        </article>
    `,
    styles: [`
        .author {
            display: inline-block;
            font-style: italic;
            font-size: 12px;
            width: 80%;
        }
        .config {
            display: inline-block;
            text-align: right;
            font-size: 12px;
            width: 19%;
        }
    `]
})
export class TaskComponent {
    @Input() task:Task;
    @Output() editClicked = new EventEmitter<string>();

    constructor (private _taskService: TaskService) {}

    onEdit() {
        this._taskService.editTask(this.task);
    }

    onDelete() {
        this._taskService.deleteTask(this.task)
            .subscribe(
                data => console.log(data),
                error => console.error(error)
            );
    }
     belongsToUser() {
        return localStorage.getItem('userId') == this.task.userId;
    }
}
