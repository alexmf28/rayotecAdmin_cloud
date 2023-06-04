import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.css']
})
export class InputSelectComponent {

  @Input()
  title:string = '';

  @Input()
  model:FormControl = new FormControl();

  @Input()
  data:Array<any> = [];
  
  @Output()
  changeValue = new EventEmitter();

  onChangeValue (item:any) { this.changeValue.emit(item); }

  isValid(control:FormControl):boolean { return control.valid || control.pristine; }
}
