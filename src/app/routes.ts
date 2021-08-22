import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ProfileComponent } from './profile/profile.component';
import { PublicPagesComponent } from './public-pages/public-pages.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectsAComponent } from './projects-a/projects-a.component';
import { ProjectShowComponent } from './project-show/project-show.component';
import { BlogComponent } from './blog/blog.component';

export const routes: Routes = [

{path: 'projectA', component: ProjectsComponent},
{path: 'blog', component: BlogComponent},
{path: 'projectB', component: ProjectsAComponent},
{path: 'project-show', component: ProjectShowComponent},
{path: 'public-pages', component: PublicPagesComponent},
{path: 'profile', component: ProfileComponent},
{path: 'home', component: MainComponent},
{path: '', redirectTo: '/home', pathMatch: 'full'}
];