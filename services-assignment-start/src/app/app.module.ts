// @ts-ignore
import { BrowserModule } from '@angular/platform-browser';
// @ts-ignore
import {NgModule} from '@angular/core';
// @ts-ignore
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { ActiveUsersComponent } from './active-users/active-users.component';
import { InactiveUsersComponent } from './inactive-users/inactive-users.component';
import {CounterService} from './counter.service';

@NgModule({
  declarations: [
    AppComponent,
    ActiveUsersComponent,
    InactiveUsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
