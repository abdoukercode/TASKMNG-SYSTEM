import { Component } from "@angular/core";

import { TaskInputComponent } from "./task-input.component";
import { TaskListComponent } from "./task-list.component";
@Component({
    selector: 'my-tasks',
    template: `
        <div class="row spacing">
            <my-task-input></my-task-input>
        </div>
        <div class="row spacing">
            <my-task-list></my-task-list>
        </div> 
    `,
    directives: [TaskListComponent, TaskInputComponent]
})
export class TasksComponent {
    
}
