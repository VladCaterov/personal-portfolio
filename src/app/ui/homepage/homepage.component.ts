import { Component } from '@angular/core';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})

export class HomepageComponent {
  linkedinIconUrl = "../../../assets/linkedin-logo.png";
  twitterIconUrl = "../../../assets/twitter-logo.png";
  githubIconUrl = "../../../assets/github-logo.png"; 

  linkedinUrl = "https://www.linkedin.com/in/vladimircaterov/"
  twitterUrl = "https://twitter.com/VCaterov"
  githubUrl = "https://github.com/VladCaterov"
}
