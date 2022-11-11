import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SmtpConfigComponent } from './programs/interfacing/smtp-config/smtp-config.component';

const routes: Routes = [
  {
    path:'',
    data:{
      title: 'INTERFACING HOME'
    },
    children:[
      {
        path: 'interfacing',
        loadChildren: () => 
          import('./programs/interfacing/interfacing.module').then((m) => m.InterfacingModule)
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
