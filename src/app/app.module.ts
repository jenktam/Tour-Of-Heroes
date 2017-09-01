import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Components
import { AppComponent }  from './app.component';
import { HeroesComponent } from './heroes.component'
import { HeroDetailComponent } from './hero-detail-component';
import { DashboardComponent } from './dashboard.component'

// Services
import { HeroService } from './hero.service';

// Routes
import { AppRoutingModule } from './app-routing.module'

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],

  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent
  ],

  providers: [
    HeroService
  ],

  bootstrap:    [ AppComponent ],
})

export class AppModule { };
