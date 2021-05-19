
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrationComponent } from './registration/registration.component'
import { LoginComponent } from './login/login.component'
import { PostsComponent } from './posts/posts.component';
import { CreatPostComponent } from './creat-post/creat-post.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: '', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'posts/:id', component: PostsComponent },
  { path: 'creat/post/:id', component: CreatPostComponent },
  { path: 'main/:id', component: MainComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
