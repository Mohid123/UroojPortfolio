import { Routes } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryCreateComponent } from './gallery-create/gallery-create.component';
import { MainComponent } from './main/main.component';
import { BlogAddComponent } from './blog-add/blog-add.component';
import { BlogArticlesComponent } from './blog-articles/blog-articles.component';
import { ProfileComponent } from './profile/profile.component';
import { EmbroideryComponent } from './embroidery/embroidery.component';
import { AddNeedleworkComponent } from './add-needlework/add-needlework.component';
import { PublicPagesComponent } from './public-pages/public-pages.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectsAComponent } from './projects-a/projects-a.component';
import { ProjectShowComponent } from './project-show/project-show.component';
import { BlogAffiliateComponent } from './blog-affiliate/blog-affiliate.component';
import { BlogAffiliateAddComponent } from './blog-affiliate-add/blog-affiliate-add.component';
import { BlogYtAddComponent } from './blog-yt-add/blog-yt-add.component';
import { BlogYtComponent } from './blog-yt/blog-yt.component';
import { AddComponent } from './add/add.component';
import { FashionUploadComponent } from './fashion-upload/fashion-upload.component';
import { FashionComponent } from './fashion/fashion.component';
import { MiscAddComponent } from './misc-add/misc-add.component';
import { MiscComponent } from './misc/misc.component';
import { SocialComponent } from './social/social.component';
import { SocialAddComponent } from './social-add/social-add.component';

export const routes: Routes = [

{path: 'gallery', component: GalleryComponent},
{path: 'social-add', component: SocialAddComponent},
{path: 'social', component: SocialComponent},
{path: 'fashion-upload', component: FashionUploadComponent},
{path: 'misc-add', component: MiscAddComponent},
{path: 'misc', component: MiscComponent},
{path: 'fashion', component: FashionComponent},
{path: 'add', component: AddComponent},
{path: 'blog-yt', component: BlogYtComponent},
{path: 'blog-yt-add', component: BlogYtAddComponent},
{path: 'blog-affiliate', component: BlogAffiliateComponent},
{path: 'blog-affiliate-add', component: BlogAffiliateAddComponent},
{path: 'projectA', component: ProjectsComponent},
{path: 'projectB', component: ProjectsAComponent},
{path: 'project-show', component: ProjectShowComponent},
{path: 'public-pages', component: PublicPagesComponent},
{path: 'profile', component: ProfileComponent},
{path: 'embroidery', component: EmbroideryComponent},
{path: 'add-embroidery', component: AddNeedleworkComponent},
{path: 'gallery-create', component: GalleryCreateComponent},
{path: 'home', component: MainComponent},
{path: 'blog-add', component: BlogAddComponent},
{path: 'blog-articles', component: BlogArticlesComponent},
{path: '', redirectTo: '/home', pathMatch: 'full'}
];