import { Component, HostListener, Input, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
@Component({
  selector: 'app-social-media-link',
  templateUrl: './social-media-link.component.html',
  styleUrls: ['./social-media-link.component.scss'],
  animations: [
    trigger('onHover', [
      state('reg', style({})),
      state('hover', style({
        position: 'relative',
        bottom: '10px',
        cursor: 'pointer',
      })),
      transition('reg => hover', [
        animate('300ms')
      ]),
      transition('hover => reg', [
        animate('0.5s')
      ])
    ])
    
  ]
})

export class SocialMediaLinkComponent implements OnInit {
 
  @Input() url ="";

  isHovering = false;
  
  hover(bool: boolean) {
    this.isHovering = bool;
  }
  constructor (){}
  ngOnInit(): void {
  }

}