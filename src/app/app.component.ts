import { Component } from '@angular/core';
import {Http} from '@angular/http';
import { NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  spaceScreens: Array<any>;


  constructor(private http:Http) {
    
    this.http.get('./data.json')
      .map(response => response.json().screenshots)
      .subscribe(res => this.spaceScreens = res);

  }
  likeMe(i) {
    if (this.spaceScreens[i].liked == 0)
      this.spaceScreens[i].liked = 1;
    else
      this.spaceScreens[i].liked = 0;
      console.log(i)
  }

   deleteMe(i) {
    this.spaceScreens.splice(i,1);
    console.log(i);
  }

   onSubmit(form: NgForm){
        console.log('Name: ' + form.value.name);
        console.log('Email: ' + form.value.email);
        swal("Good job!", "Thanks for subscribing", "success");
    }

}


