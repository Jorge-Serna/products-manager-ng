import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DropdownComponent } from './dropdown/dropdown.component';



@NgModule({
  declarations: [
    NavBarComponent,
    DropdownComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavBarComponent,
    DropdownComponent
  ]
})
export class SharedModule { }
