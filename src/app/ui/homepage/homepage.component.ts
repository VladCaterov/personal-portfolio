import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  animations: [
    trigger('loadSocials', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1.5s  0.25s', style({ opacity: 1 }))
      ])
    ])
  ],
  encapsulation: ViewEncapsulation.None
})

export class HomepageComponent implements OnInit{
 
  linkedinIconUrl = "../../../assets/linkedin-logo.png";
  twitterIconUrl = "../../../assets/twitter-logo.png";
  githubIconUrl = "../../../assets/github-logo.png"; 

  linkedinUrl = "https://www.linkedin.com/in/vladimircaterov/"
  twitterUrl = "https://twitter.com/VCaterov"
  githubUrl = "https://github.com/VladCaterov"
  ngOnInit(): void {
  }
  
}
