import { Component, OnInit } from "@angular/core";
import { TaskComponent } from "./task.component";
import { Task } from "./task";
import { TaskService } from "./task.service";

@Component({
    selector: 'my-task-list',
    template: `
        <section class="col-md-8 col-md-offset-2">
            <my-task *ngFor="let task of tasks" [task]="task" (editClicked)="task.content = $event"></my-task>     
        </section>
    `,
    directives: [TaskComponent]
})
export class TaskListComponent implements OnInit {

    constructor(private _taskService: TaskService) {}

    tasks: Task[];

    ngOnInit() {
        this._taskService.getTasks()
            .subscribe(
                tasks => {
                    this.tasks = tasks;
                    this._taskService.tasks = tasks;
                },
                error => console.log(error)
            );
    }
      
    }

