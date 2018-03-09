import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FooterComponent } from './footer/footer.component';
import { SkillsViewerComponent } from './skills-viewer/skills-viewer.component';
import { AboutMeHomeComponent } from './home/about-me-home/about-me-home.component';
import { ProjectsHomeComponent } from './home/projects-home/projects-home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about-me',
    component: AboutMeComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SkillsViewerComponent,
    AboutMeHomeComponent,
    ProjectsHomeComponent,
    AboutMeComponent,
    ProjectsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    CarouselModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
