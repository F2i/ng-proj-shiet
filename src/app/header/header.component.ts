import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() tabSelected = new EventEmitter<{tab: string}>();
  constructor() { }

  ngOnInit(): void {
  }

  onTabClick(tab: string) {
    this.tabSelected.emit({tab: tab});
  }

}
