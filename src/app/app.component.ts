import { Component } from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'GlaucomaStudy';
  links = [{link:'', name:'Instructions'},
  {link:'login', name:'Login'},
  {link:'glaucoma-grading', name:'Glaucoma Grading'}];

  activeLink: string = this.links[0].link;

  constructor(private router: Router){}

  goToLink(route: string){
    this.activeLink = route;
    this.router.navigate([this.activeLink]);
  }

  isActiveRoute(url: string) {
    return this.router.isActive(url, true)
  }


}
