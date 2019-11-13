import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';



import { FormsModule } from '@angular/forms';




import { UsersRouting } from './users.routing';
import { UsersComponent } from './users.component';


@NgModule({
    imports: [
      CommonModule,
      UsersRouting,
      FormsModule,



    ],
    declarations: [
       UsersComponent
    ]
    })
    export class UsersModule {}
