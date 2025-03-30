import { PrincipalButtonComponent } from '@/shared/components/buttons/principal/principalButton.component';
import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { UsersService } from './services/users.service';
import { ModalComponent } from '@/shared/components/modal/modal.component';
import { User } from '@/shared/models';
import { RouterModule } from '@angular/router';
import { ListUserComponent } from './components/list-user/list-user.component';

@Component({
  selector: 'app-users',
  imports: [PrincipalButtonComponent, ModalComponent, ListUserComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  private usersServices = inject(UsersService);
  users = signal<User[]>([]);
  showModal = signal(false);
  ngOnInit() {
    this.usersServices.getUsers().subscribe({
      next: (users) => {
        this.users.set(users.data);
      },
      error: (error) => {
        console.error('Error fetching users:', error);
      },
    });
  }
  openModal() {
    this.showModal.update(() => true);
  }

  closeModal() {
    this.showModal.update(() => false);
  }

  createUser($event: Event) {
    $event.preventDefault();
    const form = $event.target as HTMLFormElement;
    const formData = new FormData(form);
    const email = formData.get('email') as string;
    const name = formData.get('name') as string;

    this.usersServices.createUser(email, name).subscribe({
      next: (user) => {
        this.users.update((prevUsers) => [
          ...prevUsers,
          {
            ...user.data,
            balance: {
              amount: '0',
              create_at: new Date(),
              id: 0,
              id_user: user.data.id,
            },
          },
        ]);
        this.closeModal();
      },
      error: (error) => {
        console.error('Error creating user:', error);
      },
    });
  }
}
