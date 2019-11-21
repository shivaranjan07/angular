import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowAddServer = false;
  serverName = 'test';
  serverCreated = false;
  serverCreation = 'no server was created';
  public machines = ['test', 'test2'];
  constructor() {
    setTimeout(() => {
      this.allowAddServer = true;
    }, 2000);
  }

  ngOnInit() {
  }
  onServerCreation() {
    this.serverCreation = 'server is created ' + this.serverName;
    this.serverCreated = true;
    this.machines.push(this.serverName);
  }
  onUpdateServerName( event: Event ) {
    this.serverName = (event.target as HTMLInputElement).value;
  }
  displayData() {
    this.machines.forEach((x) => console.log(x));
  }
}
