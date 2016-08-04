"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var task_input_component_1 = require("./task-input.component");
var task_list_component_1 = require("./task-list.component");
var TasksComponent = (function () {
    function TasksComponent() {
    }
    TasksComponent = __decorate([
        core_1.Component({
            selector: 'my-tasks',
            template: "\n        <div class=\"row spacing\">\n            <my-task-input></my-task-input>\n        </div>\n        <div class=\"row spacing\">\n            <my-task-list></my-task-list>\n        </div> \n    ",
            directives: [task_list_component_1.TaskListComponent, task_input_component_1.TaskInputComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], TasksComponent);
    return TasksComponent;
}());
exports.TasksComponent = TasksComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhc2tzL3Rhc2tzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBRTFDLHFDQUFtQyx3QkFBd0IsQ0FBQyxDQUFBO0FBQzVELG9DQUFrQyx1QkFBdUIsQ0FBQyxDQUFBO0FBYTFEO0lBQUE7SUFFQSxDQUFDO0lBZEQ7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLDJNQU9UO1lBQ0QsVUFBVSxFQUFFLENBQUMsdUNBQWlCLEVBQUUseUNBQWtCLENBQUM7U0FDdEQsQ0FBQzs7c0JBQUE7SUFHRixxQkFBQztBQUFELENBRkEsQUFFQyxJQUFBO0FBRlksc0JBQWMsaUJBRTFCLENBQUEiLCJmaWxlIjoidGFza3MvdGFza3MuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgVGFza0lucHV0Q29tcG9uZW50IH0gZnJvbSBcIi4vdGFzay1pbnB1dC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFRhc2tMaXN0Q29tcG9uZW50IH0gZnJvbSBcIi4vdGFzay1saXN0LmNvbXBvbmVudFwiO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS10YXNrcycsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBzcGFjaW5nXCI+XG4gICAgICAgICAgICA8bXktdGFzay1pbnB1dD48L215LXRhc2staW5wdXQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHNwYWNpbmdcIj5cbiAgICAgICAgICAgIDxteS10YXNrLWxpc3Q+PC9teS10YXNrLWxpc3Q+XG4gICAgICAgIDwvZGl2PiBcbiAgICBgLFxuICAgIGRpcmVjdGl2ZXM6IFtUYXNrTGlzdENvbXBvbmVudCwgVGFza0lucHV0Q29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBUYXNrc0NvbXBvbmVudCB7XG4gICAgXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
