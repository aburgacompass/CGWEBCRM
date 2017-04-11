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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var EmpresaService = (function () {
    function EmpresaService(_http) {
        this._http = _http;
    }
    EmpresaService.prototype.getEmpresas = function () {
        return this._http.get("http://localhost:52234/Empresa/obtenerTodos").map(function (res) { return res.json(); });
    };
    EmpresaService.prototype.getEmpresa = function (id) {
        return this._http.get("http://localhost:52234/Empresa/obtener/" + id).map(function (res) { return res.json(); });
    };
    EmpresaService.prototype.removeEmpresa = function (id) {
        return this._http.delete("http://localhost:52234/Empresa/eliminar/" + id).map(function (res) { return res.json(); });
    };
    EmpresaService.prototype.addEmpresa = function (pEmpresa) {
        var params = JSON.stringify({ empresa: pEmpresa });
        var headers = new http_1.Headers({ "Content-Type": "application/json;charset=utf-8" });
        return this._http.post("http://localhost:52234/Empresa/agregar", params, { headers: headers }).map(function (res) { return res.json(); });
    };
    EmpresaService.prototype.editEmpresa = function (pEmpresa) {
        var params = JSON.stringify({ empresa: pEmpresa });
        var headers = new http_1.Headers({ "Content-Type": "application/json;charset=utf-8" });
        return this._http.post("http://localhost:52234/Empresa/editar ", params, { headers: headers }).map(function (res) { return res.json(); });
    };
    return EmpresaService;
}());
EmpresaService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], EmpresaService);
exports.EmpresaService = EmpresaService;
//# sourceMappingURL=empresa.service.js.map