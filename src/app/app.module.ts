import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeCarouselComponent } from './home-carousel/home-carousel.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FooterComponent } from './footer/footer.component';
import { SkillsViewerComponent } from './skills-viewer/skills-viewer.component';
import { AboutMeHomeComponent } from './about-me-home/about-me-home.component';
import { ProjectsHomeComponent } from './projects-home/projects-home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeCarouselComponent,
    FooterComponent,
    SkillsViewerComponent,
    AboutMeHomeComponent,
    ProjectsHomeComponent
  ],
  imports: [
    BrowserModule,
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
