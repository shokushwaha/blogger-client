import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire/compat'
import {AngularFirestoreModule} from '@angular/fire/compat/firestore'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { CategoryNavbarComponent } from './layouts/category-navbar/category-navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { TermsConditionComponent } from './pages/terms-condition/terms-condition.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { SubcriptionFormComponent } from './subcription-form/subcription-form.component';
import { CommentsFormComponent } from './comments/comments-form/comments-form.component';
import { CommentsListComponent } from './comments/comments-list/comments-list.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { PostCardsComponent } from './layouts/post-cards/post-cards.component';
import { environment } from 'src/environments/environment.development';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

    CategoryNavbarComponent,
    FooterComponent,
    HomeComponent,
    SingleCategoryComponent,
    SinglePostComponent,
    TermsConditionComponent,
    ContactUsComponent,
    SubcriptionFormComponent,
    CommentsFormComponent,
    CommentsListComponent,
    AboutUsComponent,
    PostCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
