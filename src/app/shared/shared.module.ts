import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';

import { InputTextComponent } from './components/input-text/input-text.component';
import { InputSelectComponent } from './components/input-select/input-select.component';
import { InputFileComponent } from './components/input-file/input-file.component';
import { InputCheckComponent } from './components/input-check/input-check.component';
import { InputTextAreaComponent } from './components/input-text-area/input-text-area.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    ToolbarComponent,
    BreadcrumbComponent,

    InputTextComponent,
    InputSelectComponent,
    InputFileComponent,
    InputCheckComponent,
    InputTextAreaComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    ToolbarComponent,
    BreadcrumbComponent,
    
    InputTextComponent,
    InputSelectComponent,
    InputFileComponent,
    InputCheckComponent,
    InputTextAreaComponent,
  ]
})
export class SharedModule { }
