import { PrincipalButtonComponent } from '@/shared/components/buttons/principal/principalButton.component';
import { User } from '@/shared/models';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list-user',
  imports: [PrincipalButtonComponent, RouterModule, CommonModule],
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.css',
})
export class ListUserComponent {
  @Input() users: User[] = [];
}
