import { StyleGuideComponent } from './components/style-guide/style-guide.component';
import { LoginComponent } from './components/login/login.component';
var routings = [
    {
        path: 'style-guide',
        component: StyleGuideComponent,
        data: {
            state: 'style-guide'
        }
    },
    {
        path: 'login',
        component: LoginComponent,
        data: {
            state: 'login'
        }
    }
];
export var Routings = { paths: routings };