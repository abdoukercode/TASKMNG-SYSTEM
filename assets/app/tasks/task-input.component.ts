import { Component, OnInit } from "@angular/core";

import { Task } from "./task";
import { TaskService } from "./task.service";

@Component({
    selector: 'my-task-input',
    template: `
        <section class="col-md-8 col-md-offset-2">
            <form (ngSubmit)="onSubmit(f.value)" #f="ngForm">
                <div class="form-group">
                    
                    <input ngControl="content" type="text" class="form-control" id="content" #input [ngModel]="task?.content">
                </div>
                <button type="submit" class="btn btn-primary but-spacing">{{ !task ? 'Create Task' : 'Save Task' }}</button>
                <button type="button" class="btn btn-danger" (click)="onCancel()" *ngIf="task">Cancel</button>
            </form>
        </section>
    `
})
export class TaskInputComponent implements OnInit {
    task: Task = null;

    constructor(private _taskService: TaskService) {}

    onSubmit(form:any) {
        if (this.task) {
            // Edit
            this.task.content = form.content;
            this._taskService.updateTask(this.task)
                .subscribe(
                    data => console.log(data),
                    error => console.error(error)
                );
            this.task = null;
        } else {
            const task:Task = new Task(form.content, null, 'Dummy');
            this._taskService.addTask(task)
                .subscribe(
                    data => {
                        console.log(data);
                        this._taskService.tasks.unshift(data);
                    },
                    error => console.error(error)
                );
        }
    }

    onCancel() {
        this.task = null;
    }

    ngOnInit() {
        this._taskService.taskIsEdit.subscribe(
            task => {
                this.task = task;
            }
        );
    }
}
