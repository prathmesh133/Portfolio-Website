import { Component } from '@angular/core';
import { AboutComponent } from "../about/about.component";
import { SkillsComponent } from "../skills/skills.component";
import { ProjectpageComponent } from "../projectpage/projectpage.component";
import { ContactComponent } from "../contact/contact.component";
import { InternshipsComponent } from "../internships/internships.component";
import { EducationComponent } from "../education/education.component";

@Component({
  selector: 'app-landingpage',
  imports: [AboutComponent, SkillsComponent, ProjectpageComponent, ContactComponent, InternshipsComponent, EducationComponent],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss'
})
export class LandingpageComponent {

}
