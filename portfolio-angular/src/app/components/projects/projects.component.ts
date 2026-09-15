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
      title: 'API REST - Gestion de Formations',
      language: 'Java 25, Spring Boot 3, PostgreSQL, OpenAPI',
      lastUpdate: '2026',
      image: 'api-rest.png',
      githubLink: 'https://github.com/thiziribrahimi/crud-alternance',
      description: "Conception de A à Z d'une API backend robuste. Application stricte de l'Architecture Hexagonale pour isoler la logique métier, couplée à une approche API-First (contrat OpenAPI). Utilisation des Records Java et sécurisation via tests unitaires isolés sous Mockito."
    },
    {
      title: 'MedExpire (CHU de Rouen)',
      language: 'Vue.js 3, Node.js 18, PostgreSQL, Docker',
      lastUpdate: '2026',
      image: 'medexpire.png',
      githubLink: null,
      description: "Plateforme collaborative innovante (GreenTech) permettant aux hôpitaux de redistribuer leurs excédents de médicaments avant péremption de manière sécurisée. Tableau de bord, réservation de lots et génération automatique de factures PDF."
    },
    {
      title: 'Gestion de Flotte - Microservices',
      language: 'Java 21, Spring Boot 3.3, Angular 17, Kafka',
      lastUpdate: '2026',
      image: 'flotte.png',
      githubLink: 'https://github.com/nourbhk/Projet-architecture-distribu-e',
      description: "Architecture distribuée de 5 microservices. Mise en place d'un système résilient et sécurisé avec Keycloak (OAuth2), gestion asynchrone (Kafka/Pattern Saga) et cartographie interactive en temps réel pour le tracking GPS."
    },
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
      language: 'Java, TypeScript, Angular',
      lastUpdate: 'Feb 8',
      image: 'event-manager.png', 
      githubLink: 'https://github.com/thiziribrahimi/Event-Manager'
    },
    {
      title: 'Traqueur-de-poids',
      language: 'Ruby, JavaScript',
      lastUpdate: '3 weeks ago',
      image: 'traqueur-de-poids.png', 
      githubLink: 'https://github.com/thiziribrahimi/traqueur-de-poids'
    },
    {
      title: 'Site Web Restauration',
      language: 'JavaScript, HTML, CSS',
      lastUpdate: 'Mar 31, 2024',
      image: 'site-web-restauration.png',
      githubLink: 'https://github.com/thiziribrahimi/site-web-restauration'
    }
  ];
}