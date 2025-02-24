import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { StyleClassModule } from 'primeng/styleclass';



@Component({
  selector: 'app-page-layout',
  imports: [RouterOutlet, StyleClassModule,],
  templateUrl: './page-layout.component.html',
  styleUrl: './page-layout.component.scss'
})
export class PageLayoutComponent {
  constructor(
    private router: Router,
    private cookieService: CookieService, 
  ) {
  }

  handleSignOut(): void {
    this.clearLoginInfo();
   
    this.router.navigate(['/login']); 
  }

  clearLoginInfo(): void {
    const allCookies = this.cookieService.getAll();

    Object.keys(allCookies).forEach(cookieName => {
        this.cookieService.delete(cookieName, '/'); 
    });
    document.cookie = 'KEYCLOAK_IDENTITY=; Path=/realms/compliance365/; Expires=Thu, 01 Jan 1970 00:00:00 GMT;';
    document.cookie = 'KEYCLOAK_SESSION=; Path=/realms/compliance365/; Expires=Thu, 01 Jan 1970 00:00:00 GMT;';
  }
}
