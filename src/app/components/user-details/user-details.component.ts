import { Component, Input } from '@angular/core';
import { User } from 'src/types/User';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent {
  @Input() userDetails!: User
  @Input() isLoading!: boolean;
  @Input() hasError!: boolean;
}
