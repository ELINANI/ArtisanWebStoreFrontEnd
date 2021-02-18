import { Client } from "./client";
import { LigneCommandeArticle } from "./ligne-commande-article";
import { Validation } from "./validation";

export class Commande {
    codeCommande:number ;
    dateCommande:string;
    client:Client;
    validation:Validation;
    lignCommandeArticle:LigneCommandeArticle[]
}
