import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { OrganizationComponent } from './organization.component';
import { OrganizationRouting } from './organization.routing';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
    imports: [
      CommonModule,
      OrganizationRouting,
      FormsModule,
      NgbModule,


    ],
    declarations: [
       OrganizationComponent
    ]
    })
    export class OrganizationModule {}
