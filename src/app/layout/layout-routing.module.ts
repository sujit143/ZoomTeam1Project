import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { DocResolved } from './document/document';
import { ResolverService } from '../resolver.service';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            // { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
            { path: 'charts', loadChildren: () => import('./charts/charts.module').then(m => m.ChartsModule) },
            { path: 'tables', loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule) },
            { path: 'forms', loadChildren: () => import('./form/form.module').then(m => m.FormModule) },
            { path: 'bs-element', loadChildren: () => import('./bs-element/bs-element.module').then(m => m.BsElementModule) },
            { path: 'grid', loadChildren: () => import('./grid/grid.module').then(m => m.GridModule) },
            { path: 'components', loadChildren: () => import('./bs-component/bs-component.module').then(m => m.BsComponentModule) },
            { path: 'blank-page', loadChildren: () => import('./blank-page/blank-page.module').then(m => m.BlankPageModule) },
            { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
            { path: 'design', loadChildren: () => import('./designation/designation.module').then(m => m.DesignationModule) },
            { path: 'doc',resolve:{Docdata:ResolverService}, loadChildren: () => import('./document/document.module').then(m => m.DocumentModule) },
            { path: 'search', loadChildren: () => import('./search/search.module').then(m => m.SearchModule) },
            { path: 'org', loadChildren: () => import('./organization/organization.module').then(m => m.OrganizationModule) },
            { path: 'Users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
            { path: 'dept', loadChildren: () => import('./department/department.module').then(m => m.DepartmentModule) },
            { path: 'loc', loadChildren: () => import('./locations/locations.module').then(m => m.LocationsModule) }

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
