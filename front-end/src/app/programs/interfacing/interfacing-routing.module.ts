import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SmtpAddEditComponent } from './smtp-config/smtp-add-edit/smtp-add-edit.component';
import { SmtpConfigComponent } from './smtp-config/smtp-config.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'SMTP HOME',
    },
    children: [
      {
        path: 'smtp',
        component: SmtpConfigComponent
      },
      {
        path: 'add',
        component: SmtpAddEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterfacingRoutingModule { }
