import { Boutique } from "./boutique";
import { Role } from "./role";
import { Validation } from "./validation";

export class Artisan {
    codePersonne:number;
 nomPersonne:string;
    presnomPersonne:string; 
    cinPersonne:string ;
    emailPersonne:string;
    pwdPersonne:string
    photoProfile:string;
    list:Role;
    boutiqueList:Boutique[];
    validationList:Validation[];
}
