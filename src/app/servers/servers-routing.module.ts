import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServersComponent } from './servers.component';
import { EditserverComponent } from './editserver/editserver.component';


const routes: Routes = [
  
  { path: '', component: ServersComponent },
  { path: ':id/edit', component: EditserverComponent },

]

@NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
  })

export class ServersRoutingModule {

}
  