import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ang-project';

  ngOnInit() {
    firebase.initializeApp({
        apiKey: "AIzaSyAKDdFvtJo-BTmQLB6EoQDDLpY0YrwPliE",
       authDomain: "authentication-db83c.firebaseapp.com"
      
    })

  }
}
