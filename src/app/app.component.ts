import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TD1Ex2';

  imageUrl:string = "https://media.gqmagazine.fr/photos/61fbe6c83e6a79f4873ed6e8/4:3/w_1199,h_899,c_limit/One%20piece%201.jpg"

  nomClasse:string= "redClass"
  disbouton:boolean = true

  clique(){
    console.log("On a cliqué sur le bouton")
  }

  utilisateur:any[] = [
    {"nom" : "Dupont", "prenom":"Jean", "email":"info@info.fr", "tel":"014"},
    {"nom" : "Martin", "prenom":"Jean", "email":"info@info.fr", "tel":"014"},
    {"nom" : "Lord", "prenom":"Jean", "email":"info@info.fr", "tel":"014"},
    {"nom" : "Dupuis", "prenom":"Jean", "email":"info@info.fr", "tel":"014"},
    {"nom" : "MacGregor", "prenom":"Jean", "email":"info@info.fr", "tel":"014"}
  ]
  
  detailBouton:boolean = true
 
  cacherDetails(): void {
    // if(this.detailBouton){
    //   this.detailBouton = false
    // } else {
    //   this.detailBouton = true
    // }
    this.detailBouton = !this.detailBouton
  }

  saisie:string=""

  oUtil: {nom:string, prenom:string, email:string, tel:string} =
  {"nom":"test", "prenom":"test", "email":"test", "tel":"test"}

  add(): void{
    this.oUtil.nom = this.saisie
    this.utilisateur.push(this.oUtil)
  }
  
}
