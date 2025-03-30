import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  @Input() isOpen: boolean = false; // Estado del modal
  @Output() onClose = new EventEmitter<void>(); // Evento cuando se cierra el modal

  close() {
    this.onClose.emit(); // Notifica al padre que se cerró el modal
  }
}
