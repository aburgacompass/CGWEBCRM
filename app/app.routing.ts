import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';


import {EmpresasListComponent} from "./component/empresas-list.component";
import {EmpresasDetailComponent} from "./component/empresas-detail.component";
import {EmpresaAddComponent} from "./component/empresa-add.component";
import {EmpresaEditComponent} from "./component/empresa-edit.component";


const appRoutes: Routes = [
    {
    	path: '',
    	redirectTo : '/',
    	pathMatch: 'full'
    },
   {path:'',component: EmpresasListComponent},
   {path:'empresa/:id',component: EmpresasDetailComponent},
   {path:'crear-empresa',component: EmpresaAddComponent},
   {path:'editar-empresa/:id',component: EmpresaEditComponent}
 ];

 export const appRoutingProviders: any[]=[];

 export const routing:  ModuleWithProviders = RouterModule.forRoot(appRoutes);
