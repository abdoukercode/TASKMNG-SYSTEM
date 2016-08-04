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
var task_1 = require("./task");
var task_service_1 = require("./task.service");
var TaskComponent = (function () {
    function TaskComponent(_taskService) {
        this._taskService = _taskService;
        this.editClicked = new core_1.EventEmitter();
    }
    TaskComponent.prototype.onEdit = function () {
        this._taskService.editTask(this.task);
    };
    TaskComponent.prototype.onDelete = function () {
        this._taskService.deleteTask(this.task)
            .subscribe(function (data) { return console.log(data); }, function (error) { return console.error(error); });
    };
    TaskComponent.prototype.belongsToUser = function () {
        return localStorage.getItem('userId') == this.task.userId;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', task_1.Task)
    ], TaskComponent.prototype, "task", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], TaskComponent.prototype, "editClicked", void 0);
    TaskComponent = __decorate([
        core_1.Component({
            selector: 'my-task',
            template: "\n        <article class=\"panel panel-default\">\n            <div class=\"panel-body\">\n                {{ task.content }}\n            </div>\n            <footer class=\"panel-footer\">\n                <div class=\"author\">\n                    {{ task.username }}\n                </div>\n                <div class=\"config\" *ngIf=\"belongsToUser()\">\n                \n                    <a (click)=\"onEdit()\"><i class=\"glyphicon glyphicon-edit \" ></i></a>\n                      <i (click)=\"onDelete()\" class=\"glyphicon glyphicon-remove clickable\"></i>\n                    \n                </div>\n            </footer>\n        </article>\n    ",
            styles: ["\n        .author {\n            display: inline-block;\n            font-style: italic;\n            font-size: 12px;\n            width: 80%;\n        }\n        .config {\n            display: inline-block;\n            text-align: right;\n            font-size: 12px;\n            width: 19%;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [task_service_1.TaskService])
    ], TaskComponent);
    return TaskComponent;
}());
exports.TaskComponent = TaskComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhc2tzL3Rhc2suY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBdUQsZUFBZSxDQUFDLENBQUE7QUFDdkUscUJBQXFCLFFBQVEsQ0FBQyxDQUFBO0FBRTlCLDZCQUE0QixnQkFBZ0IsQ0FBQyxDQUFBO0FBcUM3QztJQUlJLHVCQUFxQixZQUF5QjtRQUF6QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUZwQyxnQkFBVyxHQUFHLElBQUksbUJBQVksRUFBVSxDQUFDO0lBRUYsQ0FBQztJQUVsRCw4QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNsQyxTQUFTLENBQ04sVUFBQSxJQUFJLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFqQixDQUFpQixFQUN6QixVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQXBCLENBQW9CLENBQ2hDLENBQUM7SUFDVixDQUFDO0lBQ0EscUNBQWEsR0FBYjtRQUNHLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQzlELENBQUM7SUFsQkQ7UUFBQyxZQUFLLEVBQUU7OytDQUFBO0lBQ1I7UUFBQyxhQUFNLEVBQUU7O3NEQUFBO0lBckNiO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFFBQVEsRUFBRSwrcEJBaUJUO1lBQ0QsTUFBTSxFQUFFLENBQUMsMlRBYVIsQ0FBQztTQUNMLENBQUM7O3FCQUFBO0lBcUJGLG9CQUFDO0FBQUQsQ0FwQkEsQUFvQkMsSUFBQTtBQXBCWSxxQkFBYSxnQkFvQnpCLENBQUEiLCJmaWxlIjoidGFza3MvdGFzay5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4vdGFza1wiO1xuXG5pbXBvcnQgeyBUYXNrU2VydmljZSB9IGZyb20gXCIuL3Rhc2suc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LXRhc2snLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxhcnRpY2xlIGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIj5cbiAgICAgICAgICAgICAgICB7eyB0YXNrLmNvbnRlbnQgfX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGZvb3RlciBjbGFzcz1cInBhbmVsLWZvb3RlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhdXRob3JcIj5cbiAgICAgICAgICAgICAgICAgICAge3sgdGFzay51c2VybmFtZSB9fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb25maWdcIiAqbmdJZj1cImJlbG9uZ3NUb1VzZXIoKVwiPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8YSAoY2xpY2spPVwib25FZGl0KClcIj48aSBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tZWRpdCBcIiA+PC9pPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8aSAoY2xpY2spPVwib25EZWxldGUoKVwiIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmUgY2xpY2thYmxlXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZm9vdGVyPlxuICAgICAgICA8L2FydGljbGU+XG4gICAgYCxcbiAgICBzdHlsZXM6IFtgXG4gICAgICAgIC5hdXRob3Ige1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgfVxuICAgICAgICAuY29uZmlnIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgd2lkdGg6IDE5JTtcbiAgICAgICAgfVxuICAgIGBdXG59KVxuZXhwb3J0IGNsYXNzIFRhc2tDb21wb25lbnQge1xuICAgIEBJbnB1dCgpIHRhc2s6VGFzaztcbiAgICBAT3V0cHV0KCkgZWRpdENsaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIF90YXNrU2VydmljZTogVGFza1NlcnZpY2UpIHt9XG5cbiAgICBvbkVkaXQoKSB7XG4gICAgICAgIHRoaXMuX3Rhc2tTZXJ2aWNlLmVkaXRUYXNrKHRoaXMudGFzayk7XG4gICAgfVxuXG4gICAgb25EZWxldGUoKSB7XG4gICAgICAgIHRoaXMuX3Rhc2tTZXJ2aWNlLmRlbGV0ZVRhc2sodGhpcy50YXNrKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpLFxuICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gICAgICAgICAgICApO1xuICAgIH1cbiAgICAgYmVsb25nc1RvVXNlcigpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VySWQnKSA9PSB0aGlzLnRhc2sudXNlcklkO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
