import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

  @Input() title: string = '';
  // @Input() searches: any = [];
  @Input() btns: any = [];
  @Input() btnsClick: any = [];

  @Output()
  push = new EventEmitter();


  onPush(method: string) { this.push.emit(method); }

}
