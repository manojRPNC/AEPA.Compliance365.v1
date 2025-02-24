import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';

import { PanelModule } from 'primeng/panel';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-realted-websites-page',
  imports: [FooterComponent, PanelModule, HeaderComponent],
  templateUrl: './realted-websites-page.component.html',
  styleUrl: './realted-websites-page.component.scss'
})
export class RealtedWebsitesPageComponent {
  websites: any[] = [];

  constructor() {
    this.fetchWebsites();
  }

  async fetchWebsites() {
    try {
      const response = await fetch('http://strapi.itbycloud.com:1337/api/related-websites?sort=id');
      console.log('Response:', response);
      const data = await response.json();
      console.log('Data:', data);
      this.websites = data.data.map((website: any) => ({
        id: website.id,
        name: website.Name,
        description: website.Description
      }));
      console.log('Mapped websites:', this.websites);
    } catch (error) {
      console.error('Error fetching websites:', error);
    }
  }

}
