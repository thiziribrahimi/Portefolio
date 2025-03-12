import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // ✅ Ajout du RouterModule
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, NavbarComponent], // ✅ RouterModule ajouté
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mon Portfolio';
}
