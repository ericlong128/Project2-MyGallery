import { LandingComponent } from './components/landing/landing.component';
import { BulkRandomComponent } from './components/bulk-random/bulk-random.component';
import { RandomComponent } from './components/random/random.component';
import { RemoveComponent } from './components/remove/remove.component';
import { UsersComponent } from './components/users/users.component';
import { AllComponent } from './components/all/all.component';
import { FindComponent } from './components/find/find.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

import { GalleryComponent } from './components/gallery/gallery.component';
import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { SelectComponent } from './select/select.component';
import { AllartComponent } from './components/allart/allart.component';


const routes: Routes = [

  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'find', component: FindComponent},
  {path: '', component: HomeComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'all', component: AllComponent},
  {path: 'users', component: UsersComponent},
  {path: 'remove', component: RemoveComponent},
  {path: 'random', component: RandomComponent},
  {path: 'login', component: LoginComponent},
  {path: 'bulkRandom', component: BulkRandomComponent},
  {path: 'landing', component: LandingComponent},
  {path: 'select', component: SelectComponent },
  {path: 'allart', component: AllartComponent },






  {path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
