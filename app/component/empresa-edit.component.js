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
var industriaTipo_service_1 = require("../services/industriaTipo.service");
var empresa_1 = require("../model/empresa");
var EmpresaEditComponent = (function () {
    function EmpresaEditComponent(_empresaService, _industriaTipoService, _route, _router) {
        this._empresaService = _empresaService;
        this._industriaTipoService = _industriaTipoService;
        this._route = _route;
        this._router = _router;
        this.titulo = "Editar Empresa";
    }
    EmpresaEditComponent.prototype.ngOnInit = function () {
        console.log("Component EmpresaAddComponent Cargado");
        this.getIndustriasTipo();
        this.empresa = new empresa_1.Empresa(0, "", "", 0, "", "");
        this.getEmpresa();
    };
    EmpresaEditComponent.prototype.getEmpresa = function () {
        var _this = this;
        this._route.params.forEach(function (params) {
            var id = params["id"];
            _this._empresaService.getEmpresa(id).subscribe(function (result) {
                _this.empresa = result.data;
                _this.status = result.status;
                if (_this.status !== "success") {
                    //alert("Error en el servidor")
                    _this._router.navigate(["/"]);
                }
            }, function (error) {
                _this.errorMessage = error;
                if (_this.errorMessage != null) {
                    console.log(_this.errorMessage);
                    alert("Error en la petición");
                }
            });
        });
    };
    EmpresaEditComponent.prototype.getIndustriasTipo = function () {
        var _this = this;
        this._industriaTipoService.getIndustriasTipo().subscribe(function (result) {
            _this.industriasTipo = result.data;
            _this.status = result.status;
            if (_this.status !== "success") {
                alert("Error en el servidor");
            }
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage != null) {
                console.log(_this.errorMessage);
                alert("Error en la petición");
            }
        });
    };
    EmpresaEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this._empresaService.editEmpresa(this.empresa).subscribe(function (result) {
            _this.status = result.status;
            if (_this.status !== "success") {
                alert("Error en el servidor");
            }
            else {
                alert("Se registro correctamente");
            }
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage != null) {
                console.log(_this.errorMessage);
                alert("Error en la petición");
            }
        });
        this._router.navigate(["/"]);
    };
    return EmpresaEditComponent;
}());
EmpresaEditComponent = __decorate([
    core_1.Component({
        selector: "empresa-add",
        templateUrl: "app/view/empresa-add.html",
        providers: [empresa_service_1.EmpresaService, industriaTipo_service_1.IndustriaTipoService]
    }),
    __metadata("design:paramtypes", [empresa_service_1.EmpresaService,
        industriaTipo_service_1.IndustriaTipoService,
        router_1.ActivatedRoute,
        router_1.Router])
], EmpresaEditComponent);
exports.EmpresaEditComponent = EmpresaEditComponent;
//# sourceMappingURL=empresa-edit.component.js.map