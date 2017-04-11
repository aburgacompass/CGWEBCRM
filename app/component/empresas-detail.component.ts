import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router'; 

import {EmpresaService} from "../services/empresa.service";



@Component({
  selector: "empresas-detail",
    templateUrl: "app/view/empresas-detail.html",
    providers:[EmpresaService]
})

export class EmpresasDetailComponent implements OnInit{

   public empresa: Object;
   public status : string;
   public errorMessage : string;


   constructor(
        private _empresaService : EmpresaService,
        private _route: ActivatedRoute,
        private _router : Router
   	){}
  
   ngOnInit(){
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


}