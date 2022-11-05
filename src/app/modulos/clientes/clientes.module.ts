import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { GetComponent } from './get/get.component';


@NgModule({
  declarations: [
    CreateComponent,
    EditComponent,
    GetComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule
  ]
})
export class ClientesModule { }
