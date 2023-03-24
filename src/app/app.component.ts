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
  
  detail:boolean = false
 
  details(){
    this.detail = true
  }

  detailNul(){
    this.detail = false
  }
  
  
}
