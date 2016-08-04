import { Component } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES } from "@angular/router";

import { TasksComponent } from "./tasks/tasks.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { HeaderComponent } from "./header.component";


@Component({
    selector: 'my-app',
    template: ` 
        <div class="container" >
            <my-header></my-header>
            <router-outlet></router-outlet>
        </div>
       
    `,
    directives: [ROUTER_DIRECTIVES, HeaderComponent]
})
@Routes([
    {path: '/', component: TasksComponent},
    {path: '/auth', component: AuthenticationComponent}
])
export class AppComponent {
    
}
