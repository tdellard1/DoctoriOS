import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppointmentPageComponent } from './appointment-page/appointment-page.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatButtonModule, MatIconModule, MatMenuModule, MatInputModule, MatSelectModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    AppointmentPageComponent,
    ToolbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
