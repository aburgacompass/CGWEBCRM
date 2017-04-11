import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router'; 
import {EmpresaService} from "../services/empresa.service";
import {IndustriaTipoService} from "../services/industriaTipo.service";
import {Empresa} from "../model/empresa";


@Component({
    selector: "empresa-add",
    templateUrl: "app/view/empresa-add.html",
    providers:[EmpresaService,IndustriaTipoService]
})

export class EmpresaEditComponent implements OnInit{
  
   public titulo = "Editar Empresa";
   public industriasTipo: Object[];
   public status : string;
   public errorMessage : string;
   public empresa : Empresa;

   constructor(
        private _empresaService : EmpresaService,
        private _industriaTipoService : IndustriaTipoService,
        private _route: ActivatedRoute,
        private _router : Router
    ){}
  
   ngOnInit(){
     console.log("Component EmpresaAddComponent Cargado")
     this.getIndustriasTipo();
     this.empresa=new Empresa(0,"","",0,"","");
     this.getEmpresa();
   }


 getEmpresa(){
     this._route.params.forEach((params: Params) =>{

      let id = params["id"];
      this._empresaService.getEmpresa(id).subscribe(
               result =>{
                  this.empresa = result.data;
                  this.status = result.status;

                  if(this.status!=="success"){
                   //alert("Error en el servidor")
                   this._router.navigate(["/"]);
                  }

        }, error =>{
                this.errorMessage = <any>error;
                if(this.errorMessage!=null){
                     console.log(this.errorMessage);
                     alert("Error en la petición")
                }
        }
        );
     })
   }


   getIndustriasTipo(){
      this._industriaTipoService.getIndustriasTipo().subscribe(
               result =>{
                  this.industriasTipo = result.data;
                  this.status = result.status;

                  if(this.status!=="success"){
                   alert("Error en el servidor")
                  }

        }, error =>{
                this.errorMessage = <any>error;
                if(this.errorMessage!=null){
                     console.log(this.errorMessage);
                     alert("Error en la petición")
                }
        }
        );
   }

   onSubmit(){

      this._empresaService.editEmpresa(this.empresa).subscribe(
       result =>{
                  this.status = result.status;

                  if(this.status!=="success"){
                   alert("Error en el servidor");
                  }else{
                    alert("Se registro correctamente");
                  }

        }, error =>{
                this.errorMessage = <any>error;
                if(this.errorMessage!=null){
                     console.log(this.errorMessage);
                     alert("Error en la petición")
                }
        }
        );

      this._router.navigate(["/"]);

   }

 }