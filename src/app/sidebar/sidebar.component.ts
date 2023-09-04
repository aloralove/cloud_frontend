import { Component } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  @Output() toggle = new EventEmitter<void>();

toggleChart() {
  this.toggle.emit();
}
}
