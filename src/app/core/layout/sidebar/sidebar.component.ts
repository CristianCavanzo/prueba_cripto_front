import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ItemListComponent } from "./item-list/item-list.component";

@Component({
  selector: 'app-sidebar',
  imports: [RouterModule, CommonModule, ItemListComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  items = [
    { icon: 'icon1.png', route: '/', name: 'Home' },
    { icon: 'icon2.png', route: '/transactions', name: 'About' },
  ];
}
