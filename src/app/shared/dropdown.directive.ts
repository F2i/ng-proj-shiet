import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.open') toggleMenu: boolean = false;
  constructor() {
  }

  @HostListener('click') click(event: Event) {
    this.toggleMenu = !this.toggleMenu
  }

}
