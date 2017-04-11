import {Injectable} from "@angular/core";
import {Http, Response,Headers} from "@angular/http"
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";
import {Empresa} from "../model/Empresa";

@Injectable()
export class EmpresaService{
  
  constructor(private _http: Http){
  }


  getEmpresas(){
  	 return this._http.get("http://localhost:52234/Empresa/obtenerTodos").map(res => res.json());
  }

  getEmpresa(id: string){
     return this._http.get("http://localhost:52234/Empresa/obtener/"+id).map(res => res.json());
  }

  removeEmpresa(id: string){
     return this._http.delete("http://localhost:52234/Empresa/eliminar/"+id).map(res => res.json());
  }

  addEmpresa(pEmpresa: Empresa){
    let params = JSON.stringify({empresa:pEmpresa});
  	let headers = new Headers({"Content-Type":"application/json;charset=utf-8"});
  	return this._http.post("http://localhost:52234/Empresa/agregar",params,{headers: headers}).map(res => res.json());
  }

  editEmpresa(pEmpresa: Empresa){
    let params = JSON.stringify({empresa:pEmpresa});
    let headers = new Headers({"Content-Type":"application/json;charset=utf-8"});
    return this._http.post("http://localhost:52234/Empresa/editar ",params,{headers: headers}).map(res => res.json());
  }

}