import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-listing',
  templateUrl: './project-listing.component.html',
  styleUrls: ['./project-listing.component.scss'],
  animations: [
    trigger('flipState', [
      state('active', style({
        transform: 'rotateY(358deg)',
      }),),
      state('inactive', style({
        // transform: 'rotateY(180)'
      })),
      transition('active => inactive', animate('1s 0s ease-out')),
      transition('inactive => active', animate('1s 0s ease-out')),
    ])
  ]
})
export class ProjectListingComponent implements OnInit{
  @Input() projectTitle ="";
  constructor() {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  flip: string = 'inactive';
  toggleFlip(){
    this.flip = (this.flip == 'inactive') ? 'active' : 'inactive'
  }
  
}
