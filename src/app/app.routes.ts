import { Routes } from '@angular/router';
import { Dashboard } from './components/pages/dashboard/dashboard';
import { RegistProducts } from './components/pages/regist-products/regist-products';
import { EditProducts } from './components/pages/edit-products/edit-products';
import { SearchProducts } from './components/pages/search-products/search-products';

export const routes: Routes = [

    {
        path: 'pages/dashboard', component: Dashboard
    },
    {
        path: 'pages/regist-products', component:RegistProducts
    },
    {
        path: 'pages/search-products', component: SearchProducts
    },
    {
        path: 'pages/edit-products', component:EditProducts
    }
    

];
