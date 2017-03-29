import { Component, Input } from '@angular/core';

@Component({
  templateUrl: `./home.html`,
  styleUrls : ['./homestyles.css']
})

export class HomeComponent  {
  @Input() name: string = 'HAYLEE &nbsp;JANE MONTEIRO';

  public githubUrl = "https://github.com/hayleejane3";
  public linkedInUrl = "https://www.linkedin.com/in/hayleejanemonteiro/";
}
