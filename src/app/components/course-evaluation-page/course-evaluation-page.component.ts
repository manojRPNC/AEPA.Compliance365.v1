import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from "../header/header.component";


@Component({
  selector: 'app-course-evaluation-page',
  imports: [FooterComponent, ButtonModule, PanelModule, HeaderComponent],
  templateUrl: './course-evaluation-page.component.html',
  styleUrl: './course-evaluation-page.component.scss'
})
export class CourseEvaluationPageComponent {

  trainings: any[] = [];

  constructor() {
    this.fetchTrainings();
  }

  async fetchTrainings() {
    try {
      const response = await fetch('http://strapi.itbycloud.com:1337/api/trainings?sort=id');
      console.log('Response:', response);
      const data = await response.json();
      console.log('Data:', data);
      this.trainings = data.data.map((training: any) => ({
        id: training.id,
        name: training.Name,
        description: training.Description
      }));
      console.log('Mapped trainings:', this.trainings);
    } catch (error) {
      console.error('Error fetching trainings:', error);
    }
  }

}
