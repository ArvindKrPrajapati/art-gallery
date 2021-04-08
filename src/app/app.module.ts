import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from'@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideMenuComponent } from './component/side-menu/side-menu.component';
import { ArtComponent } from './component/art/art.component';

import { ArtService } from './service/art.service';
import { SingleArtComponent } from './component/single-art/single-art.component';
import { ExhibitionComponent } from './component/exhibition/exhibition.component';
import { HeaderComponent } from './component/header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    ArtComponent,
    SingleArtComponent,
    ExhibitionComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ArtService],
  bootstrap: [AppComponent]
})
export class AppModule { }
