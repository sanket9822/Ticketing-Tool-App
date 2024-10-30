import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DepartmentComponent } from './pages/department/department.component';
import { ParentcategeoryComponent } from './pages/parentcategeory/parentcategeory.component';
import { ChildcategeoryComponent } from './pages/childcategeory/childcategeory.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { NewTicketComponent } from './pages/new-ticket/new-ticket.component';
import { TicketListComponent } from './pages/ticket-list/ticket-list.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'',
        component:LayoutComponent,
        children:[
            {
                path:'dashboard',
                component:DashboardComponent
            },
            {
                path:'department',
                component:DepartmentComponent
            },
            {
                path:'parent-categeory',
                component:ParentcategeoryComponent
            },
            {
                path:'child-categeory',
                component:ChildcategeoryComponent
            },
            {
                path:'employee',
                component:EmployeeComponent
            },
            {
                path:'new-ticket',
                component:NewTicketComponent
            },
            {
                path:'ticket-list',
                component:TicketListComponent
            }
            
            
        ]
    }
];
