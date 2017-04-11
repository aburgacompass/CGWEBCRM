import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http"
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";
import {Empresa} from "../model/Empresa";

@Injectable()
export class IndustriaTipoService{
  
  constructor(private _http: Http){
  }


  getIndustriasTipo(){
  	 return this._http.get("http://localhost:52234/IndustriaTipo/obtenerTodos").map(res => res.json());
  }


}