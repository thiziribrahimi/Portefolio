import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  imports: [CommonModule] 
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Netflix Clone',
      language: 'Java, Spring Boot, Angular',
      lastUpdate: 'Dec 20, 2024',
      image: 'netflix-clone.png',
      githubLink: 'https://github.com/thiziribrahimi/netflix-clone'
      
    },
    {
      title: 'Chat App',
      language: 'CSS, JavaScript, Firebase',
      lastUpdate: 'Jan 7',
      image: 'chat-app.png',
      githubLink: 'https://github.com/thiziribrahimi/chat-app?tab=readme-ov-file'
    },

    {
      title: 'AgenceProject',
      language: 'TypeScript, Angular',
      lastUpdate: 'Jan 7',
      image: 'agence.png',
      githubLink: 'https://github.com/thiziribrahimi/AgenceProject'
    },
    {
      title: 'Event-Manager',
      language: 'Java , TypeScript, Angular',
      lastUpdate: 'Feb 8',
      image: 'event-manager.png', 
      githubLink: 'https://github.com/thiziribrahimi/Event-Manager'
    },
    {
      title: 'Traqueur-de-poids',
      language: 'Ruby , JavaScript',
      lastUpdate: ' 3 weeks ago',
      image: 'traqueur-de-poids.png', 
      githubLink: 'https://github.com/thiziribrahimi/traqueur-de-poids'
    },
    {
      title: 'Site Web Restauration',
      language: 'JvaScript, HTML, CSS',
      lastUpdate: 'Mar 31, 2024',
      image: 'site-web-restauration.png',
      githubLink: 'https://github.com/thiziribrahimi/site-web-restauration'
    }
  ];
}
