import { HttpClientModule } from '@angular/common/http';


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavComponent } from './components/nav/nav.component';
import { FindComponent } from './components/find/find.component';
import { AllComponent } from './components/all/all.component';
import { UsersComponent } from './components/users/users.component';
import { RemoveComponent } from './components/remove/remove.component';
import { RandomComponent } from './components/random/random.component';
import { SaveComponent } from './save/save.component';
import { SelectComponent } from './select/select.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GalleryComponent,
    LoginComponent,
    RegisterComponent,
    NavComponent,
    FindComponent,
    AllComponent,
    UsersComponent,
    RemoveComponent,
    RandomComponent,
    SaveComponent,
    SelectComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
