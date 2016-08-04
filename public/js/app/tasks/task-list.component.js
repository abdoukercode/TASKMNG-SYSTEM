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
var task_component_1 = require("./task.component");
var task_service_1 = require("./task.service");
var TaskListComponent = (function () {
    function TaskListComponent(_taskService) {
        this._taskService = _taskService;
    }
    TaskListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._taskService.getTasks()
            .subscribe(function (tasks) {
            _this.tasks = tasks;
            _this._taskService.tasks = tasks;
        }, function (error) { return console.log(error); });
    };
    TaskListComponent = __decorate([
        core_1.Component({
            selector: 'my-task-list',
            template: "\n        <section class=\"col-md-8 col-md-offset-2\">\n            <my-task *ngFor=\"let task of tasks\" [task]=\"task\" (editClicked)=\"task.content = $event\"></my-task>     \n        </section>\n    ",
            directives: [task_component_1.TaskComponent]
        }), 
        __metadata('design:paramtypes', [task_service_1.TaskService])
    ], TaskListComponent);
    return TaskListComponent;
}());
exports.TaskListComponent = TaskListComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhc2tzL3Rhc2stbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUNsRCwrQkFBOEIsa0JBQWtCLENBQUMsQ0FBQTtBQUVqRCw2QkFBNEIsZ0JBQWdCLENBQUMsQ0FBQTtBQVc3QztJQUVJLDJCQUFvQixZQUF5QjtRQUF6QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtJQUFHLENBQUM7SUFJakQsb0NBQVEsR0FBUjtRQUFBLGlCQVNDO1FBUkcsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUU7YUFDdkIsU0FBUyxDQUNOLFVBQUEsS0FBSztZQUNELEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ25CLEtBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNwQyxDQUFDLEVBQ0QsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFsQixDQUFrQixDQUM5QixDQUFDO0lBQ1YsQ0FBQztJQXhCTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsY0FBYztZQUN4QixRQUFRLEVBQUUsNk1BSVQ7WUFDRCxVQUFVLEVBQUUsQ0FBQyw4QkFBYSxDQUFDO1NBQzlCLENBQUM7O3lCQUFBO0lBa0JFLHdCQUFDO0FBQUQsQ0FqQkosQUFpQkssSUFBQTtBQWpCUSx5QkFBaUIsb0JBaUJ6QixDQUFBIiwiZmlsZSI6InRhc2tzL3Rhc2stbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBUYXNrQ29tcG9uZW50IH0gZnJvbSBcIi4vdGFzay5jb21wb25lbnRcIjtcbmltcG9ydCB7IFRhc2sgfSBmcm9tIFwiLi90YXNrXCI7XG5pbXBvcnQgeyBUYXNrU2VydmljZSB9IGZyb20gXCIuL3Rhc2suc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LXRhc2stbGlzdCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJjb2wtbWQtOCBjb2wtbWQtb2Zmc2V0LTJcIj5cbiAgICAgICAgICAgIDxteS10YXNrICpuZ0Zvcj1cImxldCB0YXNrIG9mIHRhc2tzXCIgW3Rhc2tdPVwidGFza1wiIChlZGl0Q2xpY2tlZCk9XCJ0YXNrLmNvbnRlbnQgPSAkZXZlbnRcIj48L215LXRhc2s+ICAgICBcbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIGAsXG4gICAgZGlyZWN0aXZlczogW1Rhc2tDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFRhc2tMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3Rhc2tTZXJ2aWNlOiBUYXNrU2VydmljZSkge31cblxuICAgIHRhc2tzOiBUYXNrW107XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5fdGFza1NlcnZpY2UuZ2V0VGFza3MoKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICB0YXNrcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFza3MgPSB0YXNrcztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdGFza1NlcnZpY2UudGFza3MgPSB0YXNrcztcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgICAgKTtcbiAgICB9XG4gICAgICBcbiAgICB9XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
