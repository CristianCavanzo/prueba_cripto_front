import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import 'remixicon/fonts/remixicon.css';
import { SidebarComponent } from './core/layout/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  //
  title = 'prueba_front';
}
