import { BrowserModule } from '@angular/platform-browser';
import {Directive, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {PageProductComponent} from './components/pages/page-product/page-product';
import {PageUploadComponent} from './components/pages/page-upload/page-upload';
import {HttpClientModule} from '@angular/common/http';
import {HeaderMainMenuComponent} from './components/elements/menu-header/menu-header.component';
import {FormsModule} from '@angular/forms';
import {FileUploadModule} from 'ng2-file-upload';

const appRoutes: Routes = [
  { path: 'product', component: PageProductComponent },
  { path: 'upload', component: PageUploadComponent },
  { path: '', redirectTo: 'upload',  pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    PageProductComponent,
    PageUploadComponent,
    HeaderMainMenuComponent,
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
