import { BrowserModule } from '@angular/platform-browser';
import {Directive, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {PagePlaceComponent} from './components/pages/page-place/page-place';
import {HttpClientModule} from '@angular/common/http';
import {HeaderMainMenuComponent} from './components/elements/menu-header/menu-header.component';
import {FormsModule} from '@angular/forms';
import {FileUploadModule} from 'ng2-file-upload';
import {PageAdvertisementsComponent} from './components/pages/page-advertisements/page-advertisements';

const appRoutes: Routes = [
  { path: 'advertisements', component: PageAdvertisementsComponent },
  { path: 'place', component: PagePlaceComponent },
  { path: '', redirectTo: 'advertisements',  pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    PagePlaceComponent,
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
