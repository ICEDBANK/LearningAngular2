import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { routes } from './app.router';
import { HttpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import { HeaderComponent }  from './header/header.component';
import { FooterComponent }  from './footer/footer.component';
import { AboutComponent }  from './about/about.component';
import { ContactComponent }  from './contact/contact.component';
import { PortfolioComponent }  from './portfolio/portfolio.component';
import { SliderComponent }  from './slider.component';
import { FormsModule } from '@angular/forms';
import { ContactFormComponent } from './contact/contact-form/contact-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({

  'imports':      [
    BrowserModule,
    HttpModule,
    RouterModule,
    routes,
    FormsModule,
    ReactiveFormsModule
  ],

  'declarations': [ 
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    PortfolioComponent,
    SliderComponent,
    ContactFormComponent
  ],

  'providers': [{

    'provide': Window,

    'useValue': window

  }],

  'bootstrap': [
    AppComponent
  ]

})
export class AppModule { }
