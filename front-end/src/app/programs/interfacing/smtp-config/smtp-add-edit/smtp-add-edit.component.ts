import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smtp-add-edit',
  templateUrl: './smtp-add-edit.component.html',
  styleUrls: ['./smtp-add-edit.component.scss']
})
export class SmtpAddEditComponent implements OnInit {
  pageTitle: string = "SMTP Add New"

  constructor() { }

  ngOnInit(): void {
  }

}
