import { Component } from '@angular/core';
import { DetailCard } from '../pages/detail-card/detail-card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  MeExpand: Boolean = false;
  ProjectsExpand: Boolean = false;
  ExperienceExpand: Boolean = false;

  viewDetail: Boolean = false;
  viewing: String = '';

  title = 'portfolio-page';

  onClickMe(toExpand: string) {
    switch (toExpand.toUpperCase()) {
      case 'ME':
        this.MeExpand = !this.MeExpand;
        this.ProjectsExpand = false;
        this.ExperienceExpand = false;
        break;

      case 'PROJECTS':
        this.ProjectsExpand = !this.ProjectsExpand;
        this.MeExpand = false;
        this.ExperienceExpand = false;
        break;

      case 'EXPERIENCE':
        this.ExperienceExpand = !this.ExperienceExpand;
        this.ProjectsExpand = false;
        this.MeExpand = false;
        break;
    }
  }

  redirect(goTo: string = '') {
    window.location.href = goTo;
  }

  showProject(toShow: string) {
    this.viewDetail = true;
    this.viewing = toShow;
  }

  toggleClose(status: Boolean) {
    this.viewDetail = status;
    this.MeExpand = this.ProjectsExpand = this.ExperienceExpand = false;
  }
}
