import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Routings } from './routing';

import { ApiService } from './services/api.service';
import { AuthService } from './services/auth/auth.service';

import { AppComponent } from './app.component';
import { StyleGuideComponent } from './components/style-guide/style-guide.component';
import { LoginComponent } from './components/login/login.component';
import { CreateAccountTypeComponent } from './components/create-account-type/create-account-type.component';

@NgModule({
  declarations: [
    AppComponent,
    StyleGuideComponent,
    LoginComponent,
    CreateAccountTypeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(Routings.paths),
    BrowserAnimationsModule
  ],
  providers: [ApiService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
