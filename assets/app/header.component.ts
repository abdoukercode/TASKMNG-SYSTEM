import { Component } from "@angular/core";
import { ROUTER_DIRECTIVES,Router } from "@angular/router";

@Component({
    selector: 'my-header',
    template: `
            <header class="row">
                <nav class="navbar navbar-default">
                  <div class="container-fluid">
                    <!-- Brand and toggle get grouped for better mobile display -->
                    <div class="navbar-header">
                          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                          </button>
                               <a class="navbar-brand" href="#" >
                                    <img alt="Brand" src="http://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/KOrganizer-ToDo-Oxygen.png/60px-KOrganizer-ToDo-Oxygen.png">
                                      </a>
                              
                    </div>
                
                    <!-- Collect the nav links, forms, and other content for toggling -->
                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                      <ul class="nav navbar-nav">
                        <li><a [routerLink]="['/']">My TodoList</a></li>
                        <li><a [routerLink]="['/auth']">Authentication</a></li>
                      </ul>
                        </div><!-- /.navbar-collapse -->
                      </div><!-- /.container-fluid -->
                </nav>
            </header>



         
    `,
    directives: [ROUTER_DIRECTIVES],
    styles: [`
        header {
            margin-bottom: 20px;
        }
    
        ul {
          text-align: center;  
        }
        
        li {
            float: none;
           display: inline-block;
        }
        
        /*.router-link-active {
            background-color: #337ab7;
            color: white;
        }*/
    `]
})
export class HeaderComponent {
 
    }
