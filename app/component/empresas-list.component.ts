import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router'; 
import {EmpresaService} from "../services/empresa.service";



@Component({
  selector: "empresas-list",
    templateUrl : "app/view/empresas-list.html",
    providers : [EmpresaService]
})

export class EmpresasListComponent {
  public titulo:string ="Listado de empresas" ;
  public empresas : Object[];
  public status : string;
  public errorMessage : string;
  public confimado;
   
    constructor(
      private _route: ActivatedRoute,
      private _router : Router,
      private _empresaService : EmpresaService){
    }

    ngOnInit(){
        this.getEmpresas();
    	  console.log("empresas list")
    }

    getEmpresas(){
    	let box_empresas = <HTMLElement>document.querySelector("#empresas-list .loading");
        box_empresas.style.visibility="visible";

    	this._empresaService.getEmpresas().
    	subscribe(
    		result =>{
                  this.empresas = result.data;
                  this.status = result.status;

                  if(this.status!="success"){
                   alert("Error en el servidor")
                  }

                  box_empresas.style.display="none";

    		}, error =>{
                    this.errorMessage = <any>error;
                    
                    if(this.errorMessage!=null){
                    console.log(this.errorMessage);
                    alert("Error en la petición")
                    }
    		}
    		);
    }

    onBorrarEmpresa(id){

      this._empresaService.removeEmpresa(id).
      subscribe(
        result =>{
                  this.status = result.status;

                  if(this.status!="success"){
                   alert("Error en el servidor")
                  }

                  this.getEmpresas();


        }, error =>{
                    this.errorMessage = <any>error;

                    if(this.errorMessage!=null){
                     console.log(this.errorMessage);
                     alert("Error en la petición")
                    }
        }
        );

    }

    



}