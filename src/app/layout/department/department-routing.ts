import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DepartmentComponent } from './department.component';



const routes: Routes = [
    {
        path: '', component:DepartmentComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DepartmentRouting{
}
