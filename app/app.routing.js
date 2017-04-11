"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var empresas_list_component_1 = require("./component/empresas-list.component");
var empresas_detail_component_1 = require("./component/empresas-detail.component");
var empresa_add_component_1 = require("./component/empresa-add.component");
var empresa_edit_component_1 = require("./component/empresa-edit.component");
var appRoutes = [
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
    },
    { path: '', component: empresas_list_component_1.EmpresasListComponent },
    { path: 'empresa/:id', component: empresas_detail_component_1.EmpresasDetailComponent },
    { path: 'crear-empresa', component: empresa_add_component_1.EmpresaAddComponent },
    { path: 'editar-empresa/:id', component: empresa_edit_component_1.EmpresaEditComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map