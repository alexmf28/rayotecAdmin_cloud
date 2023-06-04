import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent {

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
