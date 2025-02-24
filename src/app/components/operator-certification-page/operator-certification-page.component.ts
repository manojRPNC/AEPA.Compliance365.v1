import { Component } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from "../header/header.component";


@Component({
  selector: 'app-operator-certification-page',
  imports: [FooterComponent, ButtonModule, PanelModule, HeaderComponent],
  templateUrl: './operator-certification-page.component.html',
  styleUrl: './operator-certification-page.component.scss'
})
export class OperatorCertificationPageComponent {

  operators: any[] = [];

  constructor() {
    this.fetchOperators();
  }
  async fetchOperators() {
    try {
      const response = await fetch('http://strapi.itbycloud.com:1337/api/operators?sort=id');
      console.log('Response:', response);
      const data = await response.json();
      console.log('Data:', data);
      this.operators = data.data.map((operator: any) => ({
        id: operator.id,
        name: operator.Name,
        description: operator.Description
      }));
      console.log('Mapped operators:', this.operators);
    } catch (error) {
      console.error('Error fetching operators:', error);
    }
  }


}
