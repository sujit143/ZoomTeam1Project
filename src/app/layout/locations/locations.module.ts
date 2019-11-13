import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import { GrowlModule } from 'primeng/primeng';
import { LocationsRouting } from './locations-routing';
import { LocationsComponent } from './locations.component';

@NgModule({
    imports: [
        CommonModule,
         FormsModule,
         NgbModule,
       LocationsRouting,
        ConfirmDialogModule,
        GrowlModule

    ],
    declarations: [
        LocationsComponent
    ],
    providers: [ConfirmationService]
})
export class LocationsModule {}
