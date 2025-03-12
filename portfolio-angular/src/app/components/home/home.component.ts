import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  
  texts = [
    "Développeuse passionnée par le web."
  ];
  textIndex = 0;
  charIndex = 0;
  typingSpeed = 100;
  erasingSpeed = 50;
  delayBetweenTexts = 2000; 

  constructor(private router: Router) {}

  ngAfterViewInit() {
    this.typeEffect();
  }

  typeEffect() {
    const textElement = document.querySelector('.animated-text') as HTMLElement;
    
    if (!textElement) return; // Vérifier si l'élément existe

    const type = () => {
      if (this.charIndex < this.texts[this.textIndex].length) {
        textElement.innerHTML += this.texts[this.textIndex].charAt(this.charIndex);
        this.charIndex++;
        setTimeout(type, this.typingSpeed);
      } else {
        setTimeout(() => {
          this.eraseEffect();
        }, this.delayBetweenTexts);
      }
    };
    
    type();
  }

  eraseEffect() {
    const textElement = document.querySelector('.animated-text') as HTMLElement;
    
    if (!textElement) return;

    const erase = () => {
      if (this.charIndex > 0) {
        textElement.innerHTML = this.texts[this.textIndex].substring(0, this.charIndex - 1);
        this.charIndex--;
        setTimeout(erase, this.erasingSpeed);
      } else {
        this.textIndex = (this.textIndex + 1) % this.texts.length;
        setTimeout(() => {
          this.typeEffect();
        }, this.typingSpeed);
      }
    };

    erase();
  }

  goToProjects() {
    this.router.navigate(['/projects']);
  }
}
