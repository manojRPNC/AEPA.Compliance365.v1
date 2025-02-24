import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { CommonModule } from '@angular/common';
import { RippleModule } from 'primeng/ripple';
import { InputTextModule } from 'primeng/inputtext';

import { environment } from '../../environments/environments';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from "../header/header.component";




@Component({
  selector: 'app-landing-page',
  imports: [RouterModule, ButtonModule, StyleClassModule, CommonModule, RippleModule, InputTextModule, FooterComponent, HeaderComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
 isLoading: boolean = false;
  
  constructor(private router: Router) { }

  ngOnInit(): void { 
  }

  handleSignIn(): void {
    window.location.href = environment.KEYCLOAK_LOGIN_URI;
   
  }

  scrollBehavior(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
}

scrollToElement($element: any): void {
    setTimeout(() => {
        $element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest',
        });
    }, 200);
}
}
