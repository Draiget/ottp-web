import { BrowserModule } from '@angular/platform-browser';
import {Directive, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {PagePlaceComponent} from './components/pages/page-place/page-place';
import {HttpClientModule} from '@angular/common/http';
import {HeaderMainMenuComponent} from './components/elements/menu-header/menu-header.component';
import {FormsModule} from '@angular/forms';
import {FileUploadModule} from 'ng2-file-upload';
import {PageMainComponent} from './components/pages/page-main/page-main';
import {PageAdvertisementsComponent} from './components/pages/page-advertisements/page-advertisements';

const appRoutes: Routes = [
  { path: 'advertisements', component: PageAdvertisementsComponent },
  { path: 'place', component: PagePlaceComponent },
  { path: 'main', component: PageMainComponent },
  { path: '', redirectTo: 'main',  pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    PagePlaceComponent,
    PageMainComponent,
    HeaderMainMenuComponent,
    PageAdvertisementsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FileUploadModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true, preloadingStrategy: PreloadAllModules } // <-- debugging purposes only
    ),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
