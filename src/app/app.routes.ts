import { Routes } from '@angular/router';

import { AuthGuard } from './auth.guard';

import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { CourseEvaluationPageComponent } from './components/course-evaluation-page/course-evaluation-page.component';
import { OperatorCertificationPageComponent } from './components/operator-certification-page/operator-certification-page.component';
import { FaqPageComponent } from './components/faq-page/faq-page.component';
import { RealtedWebsitesPageComponent } from './components/realted-websites-page/realted-websites-page.component';
import { ContactUsPageComponent } from './components/contact-us-page/contact-us-page.component';
import { ApprovedCeuCoursesPageComponent } from './components/approved-ceu-courses-page/approved-ceu-courses-page.component';



export const routes: Routes = [
  { path: '', component: LandingPageComponent },  
  { path: 'landing-page', component: LandingPageComponent },  
  { path: 'operator-certification-page', component: OperatorCertificationPageComponent },  
  { path: 'approved-ceu-courses-page', component: ApprovedCeuCoursesPageComponent },  
  { path: 'course-evaluation-page', component: CourseEvaluationPageComponent },  
  { path: 'faq-page', component: FaqPageComponent },
  { path: 'realted-websites-page', component: RealtedWebsitesPageComponent },
  { path: 'contact-us-page', component: ContactUsPageComponent },
  {
    path: '',
    component: LandingPageComponent,
    data: { layout: 'page' }
  },
  {
    path: '**',
    redirectTo: ''
  }
];
