// @ts-ignore
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {LoggingService} from '../logging.service';
import {AccountsService} from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService, AccountsService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private loggingService: LoggingService, private accntService: AccountsService) {}

  onSetTo(status: string) {
    this.accntService.updateStatus(this.id, status);
    this.loggingService.loggingStatus(status);
  }
}
