import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-listing',
  templateUrl: './project-listing.component.html',
  styleUrls: ['./project-listing.component.scss'],
  animations: [
    trigger('flipState', [
      state('active', style({
        transform: 'rotateY(179deg)'
      })),
      state('inactive', style({
        transform: 'rotateY(0)'
      })),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in'))
    ])
  ]
})
export class ProjectListingComponent implements OnInit{
  constructor() {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  flip: string = 'inactive';
  toggleFlip(){
    this.flip = (this.flip == 'inactive') ? 'active' : 'inactive'
  }
}
