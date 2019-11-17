import {Component} from '@angular/core';

@Component({ // decorator enhances the classes
 selector: 'app-server',
 templateUrl: './server.component.html',
  styles: ['p { color: green; }']
})
export class ServerComponent {
  serverId = 10;
  serverStatus = 'offline';
  getServerStatus() {
    return this.serverStatus;
  }
}
