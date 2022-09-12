import { Directive, ElementRef, HostBinding, HostListener, ViewChild } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @ViewChild('dropdownMenu') someInput!: ElementRef;
  @HostBinding('class.open') toggleMenu: boolean = false;
  @HostListener('document:click', ['$event']) click(event: Event) {
    console.log(event.target)
    console.log(this.ele)
    this.toggleMenu = this.ele.nativeElement.contains(event.target) ? !this.toggleMenu : false;
  }
  
  constructor(private ele: ElementRef) {
  }

}
