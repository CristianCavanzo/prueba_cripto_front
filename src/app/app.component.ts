import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import 'remixicon/fonts/remixicon.css';
import { SidebarComponent } from './core/layout/sidebar/sidebar.component';
import { ModalComponent } from './shared/components/modal/modal.component';
import { ErrorService } from './features/pages/transactions/services/error.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarComponent, ModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  //
  title = 'prueba_front';

  errorService = inject(ErrorService);
}
