import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss'
})
export class DropdownComponent implements AfterViewInit {

  @ViewChild('container', { static:true }) container!: ElementRef;

  dropdown;
  isOpen = false;

  ngAfterViewInit(): void {
    
    const toggleBtn = this.container.nativeElement.querySelector('[dropdownToggle]');

    if(!toggleBtn){
      throw new Error('Dropdown not found');
    }

    this.dropdown = new bootstrap.Dropdown( toggleBtn, { autoClose: false });

    toggleBtn.addEventListener('click', ()=>{
      this.toggle();
    })

  }

  toggle(){
    this.dropdown.toggle();
    this.isOpen = !this.isOpen;
  }

  close(){
    this.dropdown.hide();
    this.isOpen = false;
  }


}
