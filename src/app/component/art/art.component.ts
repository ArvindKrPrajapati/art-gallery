import { Component, OnInit } from '@angular/core';

import {IArt} from '../../model/art.model';
import {Router} from '@angular/router';
import { ArtService } from '../../service/art.service';
@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.css']
})
export class ArtComponent implements OnInit {

 arts:IArt[]=[];
  constructor(private art:ArtService,
              private router:Router) { }
 
  ngOnInit(): void {
   this.art.getArts().subscribe((art:IArt[])=>{
      this.arts=art;
    });
  //  this.arts= this.art.getData();
  }


 goToSingleArt(id){
   this.router.navigate(['art',id]);
 }
}