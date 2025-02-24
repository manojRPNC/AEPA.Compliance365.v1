import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-faq-page',
  imports: [HeaderComponent,FooterComponent,ButtonModule,PanelModule],
  templateUrl: './faq-page.component.html',
  styleUrl: './faq-page.component.scss'
})
export class FaqPageComponent {

  faqs: any[] = [];

  constructor() {
    this.fetchFaqs();
  }
  async fetchFaqs() {
    try {
      const response = await fetch('http://strapi.itbycloud.com:1337/api/faqs?sort=id');
      console.log('Response:', response);
      const data = await response.json();
      console.log('Data:', data);
      this.faqs = data.data.map((faq: any) => ({
        id: faq.id,
        name: faq.Name, 
        description: faq.Description
      }));
      console.log('Mapped faqs:', this.faqs);
    } catch (error) {
      console.error('Error fetching faqs:', error);
    }
  }

}
