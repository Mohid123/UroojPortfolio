import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTableModule } from '@angular/material/table';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { SidebarModule } from 'ng-sidebar';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { MatCarouselModule } from '@ngbmodule/material-carousel';
import { NgxSpinnerModule } from "ngx-spinner";
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { AppRoutingModule } from './app-routing.module';
import { ImageUploadService } from './Services/image-upload.service';

import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryCreateComponent } from './gallery-create/gallery-create.component';
import { MainComponent } from './main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidenavComponent } from './sidenav/sidenav.component';
import { BlogArticlesComponent } from './blog-articles/blog-articles.component';
import { FooterComponent } from './footer/footer.component';
import { BlogAddComponent } from './blog-add/blog-add.component';
import { ProfileComponent } from './profile/profile.component';
import { EmbroideryComponent } from './embroidery/embroidery.component';
import { AddNeedleworkComponent } from './add-needlework/add-needlework.component';
import { PublicPagesComponent } from './public-pages/public-pages.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectsAComponent } from './projects-a/projects-a.component';
import { ProjectShowComponent } from './project-show/project-show.component';
import { BlogAffiliateComponent } from './blog-affiliate/blog-affiliate.component';
import { BlogAffiliateAddComponent } from './blog-affiliate-add/blog-affiliate-add.component';
import { BlogYtComponent } from './blog-yt/blog-yt.component';
import { BlogYtAddComponent } from './blog-yt-add/blog-yt-add.component';
import { AddComponent } from './add/add.component';
import { FashionUploadComponent } from './fashion-upload/fashion-upload.component';
import { FashionComponent } from './fashion/fashion.component';
import { MiscAddComponent } from './misc-add/misc-add.component';
import { MiscComponent } from './misc/misc.component';
import { SocialAddComponent } from './social-add/social-add.component';
import { SocialComponent } from './social/social.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    GalleryCreateComponent,
    MainComponent,
    SidenavComponent,
    BlogArticlesComponent,
    FooterComponent,
    BlogAddComponent,
    ProfileComponent,
    EmbroideryComponent,
    AddNeedleworkComponent,
    PublicPagesComponent,
    ProjectsComponent,
    ProjectsAComponent,
    ProjectShowComponent,
    BlogAffiliateComponent,
    BlogAffiliateAddComponent,
    BlogYtComponent,
    BlogYtAddComponent,
    AddComponent,
    FashionUploadComponent,
    FashionComponent,
    MiscAddComponent,
    MiscComponent,
    SocialAddComponent,
    SocialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    MatExpansionModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatTableModule,
    ShareButtonsModule,
    ShareIconsModule,
    FontAwesomeModule,
    SidebarModule.forRoot(),
    FlashMessagesModule.forRoot(),
    MatCarouselModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    NgbModule,
    CKEditorModule,
    NgxSpinnerModule
  ],
  providers: [
  ImageUploadService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
