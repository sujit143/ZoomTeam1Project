import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfirmDialogModule } from 'primeng/primeng';
import { GrowlModule } from 'primeng/growl';
import { ConfirmationService } from 'primeng/api';
import { DepartmentRouting } from './department-routing';
import { DepartmentComponent } from './department.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';




@NgModule({
    imports: [
        CommonModule,
         FormsModule,
         NgbModule,
        DepartmentRouting,
        ConfirmDialogModule,
        GrowlModule

    ],
    declarations: [
        DepartmentComponent
    ],
    providers: [ConfirmationService]
})
export class DepartmentModule {}
