import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-principal-button',
  templateUrl: './principalButton.component.html',
  styleUrl: './principalButton.component.css',
})
export class PrincipalButtonComponent {
  @Input() title: string = 'Principal';
  @Input() className?: string = '';

  @Output() action = new EventEmitter<Event>();

  handleEvent(event: Event) {
    this.action.emit(event);
  }
}
