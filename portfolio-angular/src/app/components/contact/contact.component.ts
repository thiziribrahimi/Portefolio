import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule], 
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  message: string = '';

  sendMessage() {
    if (this.name && this.email && this.message) {
      const mailtoLink = `mailto:thiziribrahimi@outlook.fr?subject=Message de ${this.name}&body=${this.message}%0A%0AContact: ${this.email}`;
      window.location.href = mailtoLink;
    } else {
      alert("Veuillez remplir tous les champs !");
    }
  }
}
