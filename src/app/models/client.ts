import { Commande } from "./commande";
import { Role } from "./role";

export class Client {
    codePersonne:number;
    nomPersonne:string;
    presnomPersonne:string; 
    cinPersonne:string ;
    emailPersonne:string;
    pwdPersonne:string
    photoProfile:string;
    list:Role;
    commandeList:Commande[];
}
