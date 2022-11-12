import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterfacingRoutingModule } from './interfacing-routing.module';
import { SmtpConfigComponent } from './smtp-config/smtp-config.component';
import { SmtpAddEditComponent } from './smtp-config/smtp-add-edit/smtp-add-edit.component';

import { CardModule, GridModule, MultiSelectModule,LoadingButtonModule, SmartTableModule, SmartPaginationModule, FormModule, ModalModule, TabsModule, NavModule, AccordionModule } from '@coreui/angular-pro';
import { IconModule } from '@coreui/icons-angular';
import { DatePickerModule } from '@coreui/angular-pro';
import {
  AlertModule,
  BadgeModule,
  ButtonModule,
  CollapseModule,
  SharedModule,
  TableModule,
  UtilitiesModule
} from '@coreui/angular-pro';






@NgModule({
  declarations: [
    SmtpConfigComponent,
    SmtpAddEditComponent
  ],
  imports: [
    CommonModule,
    InterfacingRoutingModule,
    CardModule,
    GridModule,
    IconModule,
    DatePickerModule,
    MultiSelectModule,
    LoadingButtonModule,
    SmartTableModule,
    SmartPaginationModule,
    CollapseModule,
    TableModule,
    UtilitiesModule,
    BadgeModule,
    SharedModule,
    ButtonModule,
    AlertModule,
    FormModule,
    MultiSelectModule,
    ModalModule,
    ButtonModule,
    TabsModule,
    NavModule,
    AccordionModule,
    IconModule,
    
  ]
})
export class InterfacingModule { }
