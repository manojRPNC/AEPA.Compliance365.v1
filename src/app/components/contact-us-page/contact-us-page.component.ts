import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';


@Component({
  selector: 'app-contact-us-page',
  imports: [HeaderComponent,FooterComponent,ButtonModule,InputTextModule,RippleModule],
  templateUrl: './contact-us-page.component.html',
  styleUrl: './contact-us-page.component.scss'
})
export class ContactUsPageComponent {

  contacts: any[] = [];

  constructor() {
    this.fetchContacts();
  }

  async fetchContacts() {
    try {
      const response = await fetch('http://strapi.itbycloud.com:1337/api/contact-uses?sort=id');
      console.log('Response:', response);
      const data = await response.json();
      console.log('Data:', data);
      this.contacts = data.data.map((contact: any) => ({
        id: contact.id,
        name: contact.Name,
        description: contact.Description
      }));
      console.log('Mapped contacts:', this.contacts);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  }

}
