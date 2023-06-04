import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-file',
  templateUrl: './input-file.component.html',
  styleUrls: ['./input-file.component.css']
})
export class InputFileComponent {

  @Input() 
  title:string = '';
   
  @Input()
  model:FormControl = new FormControl;

  @Input()
  file:any = {};

  @Input()
  prefixs:string = 'image/*';

  @Input()
  disabled:boolean = false;
    
  isValid(control:FormControl):boolean { return control.valid || control.pristine; }
}
