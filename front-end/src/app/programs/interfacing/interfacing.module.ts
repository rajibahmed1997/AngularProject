import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterfacingRoutingModule } from './interfacing-routing.module';
import { SmtpConfigComponent } from './smtp-config/smtp-config.component';
import { SmtpAddEditComponent } from './smtp-config/smtp-add-edit/smtp-add-edit.component';


@NgModule({
  declarations: [
    SmtpConfigComponent,
    SmtpAddEditComponent
  ],
  imports: [
    CommonModule,
    InterfacingRoutingModule,
    
  ]
})
export class InterfacingModule { }
