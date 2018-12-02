import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieViewComponent } from 'src/app/components/movie-view/movie-view.component';
import { LoginComponent } from './components/login/login.component';
import { ActorViewComponent } from 'src/app/components/actor-view/actor-view.component';
import { SearchViewComponent } from './components/search-view/search-view.component';

const routes: Routes = [
  { path:'', redirectTo:'movie', pathMatch: 'full' },
  { path: 'movie', component: MovieViewComponent},
  { path: 'login', component: LoginComponent},
  { path: 'movie_results/:query', component: SearchViewComponent},
  { path:'movie/:id', component: MovieViewComponent },
  { path:'actor/:id', component: ActorViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
