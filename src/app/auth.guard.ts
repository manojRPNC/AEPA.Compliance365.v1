import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private cookieService: CookieService,) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    const isAuthenticated = this.isUserAuthenticated(); 
    if (!isAuthenticated) {
      this.router.navigate(['/landing-page']); 
      return false;
    }
    return true;
  }

  private isUserAuthenticated(): boolean {
    const token = this.cookieService.get('access_token');;
    return !!token; 
  }
}