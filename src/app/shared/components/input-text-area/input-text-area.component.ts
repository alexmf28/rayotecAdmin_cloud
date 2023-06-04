import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-text-area',
  templateUrl: './input-text-area.component.html',
  styleUrls: ['./input-text-area.component.css']
})
export class InputTextAreaComponent {

  @Input() 
  title:string = '';

  @Input() 
  icon:string = '';

  @Input()
  model:FormControl = new FormControl();
  
  @Input()
  typeText:string = 'text';

  isValid(control:FormControl):boolean { return control.valid || control.pristine; }
}
