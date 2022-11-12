import { Component, OnInit } from '@angular/core';
import smtpData from '../../_smtpData';

@Component({
  selector: 'app-smtp-config',
  templateUrl: './smtp-config.component.html',
  styleUrls: ['./smtp-config.component.scss']
})
export class SmtpConfigComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  usersData = smtpData;

  smtpColumns = [
    
    {
      key: 'Host',
      _style: { width: '10%' }
    },
    {
      key: 'PortNumber',
      _style: { width: '10%' }
    },
    {
      key: 'UserEmail',
      _style: { width: '10%' }
    },
    {
      key: 'UserPassword',
      _style: { width: '10%' }
    },
    {
      key: 'EffectiveFrom',
      _style: { width: '10%' }
    },
    {
      key: 'EffectiveTo',
      _style: { width: '10%' }
    },
    { key: 'SSL', _style: { width: '10%' } },
    {
      key: 'show',
      label: 'Action',
      _style: { width: '15%' },
      filter: false,
      sorter: false
    }
  ];


  getBadge(status: string) {
    switch (status) {
      case 'Active':
        return 'success';
      case 'Inactive':
        return 'secondary';
      case 'Pending':
        return 'warning';
      case 'Banned':
        return 'danger';
      default:
        return 'primary';
    }
  }

  

}
