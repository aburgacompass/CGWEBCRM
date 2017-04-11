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
var EmpresasDetailComponent = (function () {
    function EmpresasDetailComponent(_empresaService, _route, _router) {
        this._empresaService = _empresaService;
        this._route = _route;
        this._router = _router;
    }
    EmpresasDetailComponent.prototype.ngOnInit = function () {
        this.getEmpresa();
    };
    EmpresasDetailComponent.prototype.getEmpresa = function () {
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
    return EmpresasDetailComponent;
}());
EmpresasDetailComponent = __decorate([
    core_1.Component({
        selector: "empresas-detail",
        templateUrl: "app/view/empresas-detail.html",
        providers: [empresa_service_1.EmpresaService]
    }),
    __metadata("design:paramtypes", [empresa_service_1.EmpresaService,
        router_1.ActivatedRoute,
        router_1.Router])
], EmpresasDetailComponent);
exports.EmpresasDetailComponent = EmpresasDetailComponent;
//# sourceMappingURL=empresas-detail.component.js.map