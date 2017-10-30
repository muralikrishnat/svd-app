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
import { CreateAccountAuthorityComponent } from './components/create-account-authority/create-account-authority.component';
import { CreateAccountPasswordComponent } from './components/create-account-password/create-account-password.component';
import { CreateAccountNameComponent } from './components/create-account-name/create-account-name.component';
import { CreateAccountCodeComponent } from './components/create-account-code/create-account-code.component';
import { CreateAccountJointeamComponent } from './components/create-account-jointeam/create-account-jointeam.component';
import { CreateAccountCreateteamComponent } from './components/create-account-createteam/create-account-createteam.component';
import { AddressListComponent } from './components/address-list/address-list.component';
import { AddressNewEditComponent } from './components/address-new-edit/address-new-edit.component';
import { MyMachinesComponent } from './components/my-machines/my-machines.component';
import { MachinesNewEditComponent } from './components/machines-new-edit/machines-new-edit.component';
import { TechnologyListComponent } from './components/technology-list/technology-list.component';
import { TechnologyNewEditComponent } from './components/technology-new-edit/technology-new-edit.component';
import { ManufacturerListComponent } from './components/manufacturer-list/manufacturer-list.component';
import { ManufacturerNewEditComponent } from './components/manufacturer-new-edit/manufacturer-new-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    StyleGuideComponent,
    LoginComponent,
    CreateAccountTypeComponent,
    CreateAccountAuthorityComponent,
    CreateAccountPasswordComponent,
    CreateAccountNameComponent,
    CreateAccountCodeComponent,
    CreateAccountJointeamComponent,
    CreateAccountCreateteamComponent,
    AddressListComponent,
    AddressNewEditComponent,
    MyMachinesComponent,
    MachinesNewEditComponent,
    TechnologyListComponent,
    TechnologyNewEditComponent,
    ManufacturerListComponent,
    ManufacturerNewEditComponent
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
