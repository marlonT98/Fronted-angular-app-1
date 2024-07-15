import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  title = 'Hola angular';
  enabled:boolean = false;

  courses:string[] = ['angular' , 'react ', 'spring boot'];


  setEnabled():void{

    this.enabled = this.enabled? false : true;
    console.log('Hemos echo click en setEnabled');

  }



}
