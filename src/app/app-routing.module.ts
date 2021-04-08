import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArtComponent } from './component/art/art.component';
import { SingleArtComponent } from './component/single-art/single-art.component';
import { ExhibitionComponent } from './component/exhibition/exhibition.component';



const routes: Routes = [
  {
    path:'',
    component:ArtComponent
  },
  {
    path:'art/:id',
    component:SingleArtComponent
  },
  {
    path:'exhibition',
    component:ExhibitionComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
