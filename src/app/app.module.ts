import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Form, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeroesService } from './heroes.service';


import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { LoginComponent } from './login/login.component';
import { UserService } from './user.service';
import {TitleService} from "./title.service";
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { UpdateComponent } from './update/update.component';


@NgModule({
  declarations: [
    LoginComponent,
    AppComponent,
    HeroesComponent,
    RegisterComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [HeroesService,UserService,TitleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
