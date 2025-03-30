import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-item-list',
  imports: [RouterModule],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css',
})
export class ItemListComponent {
  @Input() name: string = '';
  @Input() icon: string = '';
  @Input() route: string = '';
}
