"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var empresa_service_1 = require("../services/empresa.service");
var EmpresasListComponent = (function () {
    function EmpresasListComponent(_route, _router, _empresaService) {
        this._route = _route;
        this._router = _router;
        this._empresaService = _empresaService;
        this.titulo = "Listado de empresas";
    }
    EmpresasListComponent.prototype.ngOnInit = function () {
        this.getEmpresas();
        console.log("empresas list");
    };
    EmpresasListComponent.prototype.getEmpresas = function () {
        var _this = this;
        var box_empresas = document.querySelector("#empresas-list .loading");
        box_empresas.style.visibility = "visible";
        this._empresaService.getEmpresas().
            subscribe(function (result) {
            _this.empresas = result.data;
            _this.status = result.status;
            if (_this.status != "success") {
                alert("Error en el servidor");
            }
            box_empresas.style.display = "none";
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage != null) {
                console.log(_this.errorMessage);
                alert("Error en la petición");
            }
        });
    };
    EmpresasListComponent.prototype.onBorrarEmpresa = function (id) {
        var _this = this;
        this._empresaService.removeEmpresa(id).
            subscribe(function (result) {
            _this.status = result.status;
            if (_this.status != "success") {
                alert("Error en el servidor");
            }
            _this.getEmpresas();
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage != null) {
                console.log(_this.errorMessage);
                alert("Error en la petición");
            }
        });
    };
    return EmpresasListComponent;
}());
EmpresasListComponent = __decorate([
    core_1.Component({
        selector: "empresas-list",
        templateUrl: "app/view/empresas-list.html",
        providers: [empresa_service_1.EmpresaService]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        empresa_service_1.EmpresaService])
], EmpresasListComponent);
exports.EmpresasListComponent = EmpresasListComponent;
//# sourceMappingURL=empresas-list.component.js.map