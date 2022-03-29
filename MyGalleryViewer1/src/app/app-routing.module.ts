import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent} from './components/home/home.component';
import { FriendsComponent } from './components/friends/friends.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'friends', component: FriendsComponent},
  {path: '', component: HomeComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'register', component: RegisterComponent},

  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
