import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public exampleData = {
    postDate: 1530662400000, // this long value represents date in miliseconds: 4 July 2018 00:00
    productPrice: 105.5, // this value represents the amount 
    bankAccountNumber: "PL33632529386161875139544898" // this value represents bank account number with the polish prefix
  }

}
