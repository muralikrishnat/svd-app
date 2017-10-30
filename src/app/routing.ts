import { StyleGuideComponent } from './components/style-guide/style-guide.component';
import { LoginComponent } from './components/login/login.component';
import { CreateAccountTypeComponent  } from './components/create-account-type/create-account-type.component';
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
        path: 'create-account-type',
        component: CreateAccountTypeComponent
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    }
];
export const Routings = { paths: routings };
