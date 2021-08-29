import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ProfileComponent } from './profile/profile.component';
import { PublicPagesComponent } from './public-pages/public-pages.component';
import { ProjectShowComponent } from './project-show/project-show.component';
import { BlogComponent } from './blog/blog.component';

export const routes: Routes = [

{path: 'blog', component: BlogComponent},
{path: 'project-show', component: ProjectShowComponent},
{path: 'public-pages', component: PublicPagesComponent},
{path: 'profile', component: ProfileComponent},
{path: 'home', component: MainComponent},
{path: '', redirectTo: '/home', pathMatch: 'full'}
];