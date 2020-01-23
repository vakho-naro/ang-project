import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServersComponent } from './servers.component';
import { EditserverComponent } from './editserver/editserver.component';
import { ServersRoutingModule } from './servers-routing.module';




@NgModule({
  declarations: [
    ServersComponent,
    EditserverComponent
  ],
  imports: [
    CommonModule,
    ServersRoutingModule  
  ]
})
export class ServersModule { 

}
