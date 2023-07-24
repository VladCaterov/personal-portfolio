import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './ui/homepage/homepage.component';
import { ProjectListingComponent } from './ui/project-listing/project-listing.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SocialMediaLinkComponent } from './ui/social-media-link/social-media-link.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ProjectListingComponent,
    SocialMediaLinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
