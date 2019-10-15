import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent} from './toolbar/toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatIconModule, MatMenuModule } from '@angular/material';
import { BlogComponent } from './blog/blog.component';
import { SlideShowComponent } from './blog/slide-show/slide-show.component';
import { AboutUsComponent } from './blog/about-us/about-us.component';
import { ModifyDeleteFormComponent } from './blog/modify-delete-form/modify-delete-form.component';
import { SocialMediaLinksComponent } from './blog/social-media-links/social-media-links.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
 
    BlogComponent,
    SlideShowComponent,
    AboutUsComponent,
    ModifyDeleteFormComponent,
    SocialMediaLinksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    Ng2CarouselamosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
