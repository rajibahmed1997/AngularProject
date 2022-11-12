import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SmtpConfigModel } from '../models/smtp-config.model';
import { SmtpConfigService } from '../services/smtp-config.service';

@Component({
  selector: 'app-smtp-config',
  templateUrl: './smtp-config.component.html',
  styleUrls: ['./smtp-config.component.scss']
})
export class SmtpConfigComponent implements OnInit {
  pageTitle: string = "SMTP Config List";
  // usersData = smtpData;
  usersData: SmtpConfigModel[] = [];

  constructor(
    private router: Router,
    private smtpConfigService : SmtpConfigService
    ) { }

  ngOnInit(): void {
    this.smtpConfigService.getSmtpConfigList().subscribe({
      next: (dataList) => {
        console.log(dataList);
        this.usersData = dataList;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  

  smtpColumns = [
    
    {
      key: 'host',
      _style: { width: '10%' }
    },
    {
      key: 'portNumber',
      _style: { width: '10%' }
    },
    {
      key: 'userEmail',
      _style: { width: '10%' }
    },
    {
      key: 'userPassword',
      _style: { width: '10%' }
    },
    {
      key: 'effectiveFrom',
      _style: { width: '10%' }
    },
    {
      key: 'effectiveTo',
      _style: { width: '10%' }
    },
    { key: 'ssl', _style: { width: '10%' } },
    {
      key: 'show',
      label: 'Action',
      _style: { width: '15%' },
      filter: false,
      sorter: false
    }
  ];


  

}
