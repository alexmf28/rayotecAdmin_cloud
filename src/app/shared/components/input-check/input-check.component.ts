import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-check',
  templateUrl: './input-check.component.html',
  styleUrls: ['./input-check.component.css']
})
export class InputCheckComponent {
  
  @Input() 
  title:string = '';

  @Input()
  model:FormControl = new FormControl();

}
