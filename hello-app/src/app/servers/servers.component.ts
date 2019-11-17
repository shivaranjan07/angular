import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowAddServer = false;
  serverName = 'testServer';
  serverCreation = 'no server was created';
  constructor() {
    setTimeout(() => {
      this.allowAddServer = true;
    }, 2000);
  }

  ngOnInit() {
  }
  onServerCreation() {
    this.serverCreation = 'server is created ' + this.serverName;
  }
  onUpdateServerName( event: Event ) {
    this.serverName = (event.target as HTMLInputElement).value;
  }
}
