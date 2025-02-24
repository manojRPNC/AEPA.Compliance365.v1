import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { StyleClassModule } from 'primeng/styleclass';

@Component({
  selector: 'app-header',
  imports: [StyleClassModule, ButtonModule, RouterModule,CommonModule,DropdownModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isOperatorsDropdownOpen = false;
  isTrainingDropdownOpen=false;
  isCoursesDropdownOpen = false;
  private operatorsTimeout: any;
  private coursesTimeout: any;
  private trainingTimeout: any;
 

  // Operators Dropdown Methods
  openOperatorsDropdown() {
    clearTimeout(this.operatorsTimeout); // Prevent immediate closing
    clearTimeout(this.coursesTimeout); // Close other menu if open
    this.isOperatorsDropdownOpen = true;
    this.isCoursesDropdownOpen = false;
  }

  closeOperatorsDropdown() {
    this.operatorsTimeout = setTimeout(() => {
      this.isOperatorsDropdownOpen = false;
    }, 50); // 50ms delay before closing
  }

  // Courses Dropdown Methods
  openCoursesDropdown() {
    clearTimeout(this.coursesTimeout);
    clearTimeout(this.operatorsTimeout); // Close other menu if open
    this.isCoursesDropdownOpen = true;
    this.isOperatorsDropdownOpen = false;
  }

  closeCoursesDropdown() {
    this.coursesTimeout = setTimeout(() => {
      this.isCoursesDropdownOpen = false;
    }, 50);
  }

  openTrainingDropdown() {
    clearTimeout(this.trainingTimeout);
    clearTimeout(this.coursesTimeout); // Close other menu
    this.isTrainingDropdownOpen = true;
    this.isCoursesDropdownOpen = false;
  }

  closeTrainingDropdown() {
    this.trainingTimeout = setTimeout(() => {
      this.isTrainingDropdownOpen = false;
    }, 50);
  }

}
