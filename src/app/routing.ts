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
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routings = [
    {
        path: 'style-guide',
        component: StyleGuideComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'create-account-type',
        component: CreateAccountTypeComponent
    },
    {
        path: 'create-account-authority',
        component: CreateAccountAuthorityComponent
    },
    {
        path: 'create-account-password',
        component: CreateAccountPasswordComponent
    },
    {
        path: 'create-account-code',
        component: CreateAccountCodeComponent
    },
    {
        path: 'create-account-teamname',
        component: CreateAccountCreateteamComponent
    },
    {
        path: 'create-account-name',
        component: CreateAccountNameComponent
    },
    {
        path: 'create-account-jointeam',
        component: CreateAccountJointeamComponent
    },
    {
        path: 'address-list',
        component: AddressListComponent
    },
    {
        path: 'address-new',
        component: AddressNewEditComponent,
        data: {
            isEdit: false
        }
    },
    {
        path: 'address-edit/{addressId}',
        component: AddressNewEditComponent,
        data: {
            isEdit: true
        }
    },
    {
        path: 'machines-list',
        component: MyMachinesComponent
    },
    {
        path: 'machines-new',
        component: MachinesNewEditComponent,
        data: {
            isEdit: false
        }
    },
    {
        path: 'machines-edit/{addressId}',
        component: MachinesNewEditComponent,
        data: {
            isEdit: true
        }
    },
    {
        path: 'manufacturer-list',
        component: ManufacturerListComponent
    },
    {
        path: 'manufacturer-new',
        component: ManufacturerNewEditComponent,
        data: {
            isEdit: false
        }
    },
    {
        path: 'manufacturer-edit/{addressId}',
        component: ManufacturerNewEditComponent,
        data: {
            isEdit: true
        }
    },
    {
        path: 'technology-list',
        component: TechnologyListComponent
    },
    {
        path: 'technology-new',
        component: TechnologyNewEditComponent,
        data: {
            isEdit: false
        }
    },
    {
        path: 'technology-edit/{addressId}',
        component: TechnologyNewEditComponent,
        data: {
            isEdit: true
        }
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    }
];
export const Routings = {
    paths: routings,
    deps: [
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
        ManufacturerNewEditComponent,
        DashboardComponent
    ]
};
