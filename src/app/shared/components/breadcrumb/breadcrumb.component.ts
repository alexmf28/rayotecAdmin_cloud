import { Component, Input } from '@angular/core';
import { BreadCrumbRoute } from '../../interfaces/breadcrumb';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent {

  @Input() title: string = '';
  @Input() btns: Array<BreadCrumbRoute> = [];
}
