import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  message: any = 'A message';
  
  constructor() { 
  }

  ngOnInit(): void {
    console.log(this.message);
  }

  showMessage(theMessage: string): void {
    console.log(theMessage); // Output: Hello
    window.alert("Looks like our dev forgot to code the surpise...");
    // Function code
  }

}
