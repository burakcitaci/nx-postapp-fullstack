import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
//import { HomeComponent } from './components/home/home.component';
import { PostDetailComponent } from './components/post/post-detail/post-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'post-detail', component: PostDetailComponent },

];

@NgModule({
    imports: [RouterModule.forRoot(routes, {onSameUrlNavigation : 'reload'})],
    exports: [RouterModule]
  })
export class AppRoutingModule { }
