import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import { ArtService } from '../../service/art.service';
import {IArt} from '../../model/art.model';


@Component({
  selector: 'app-single-art',
  templateUrl: './single-art.component.html',
  styleUrls: ['./single-art.component.css']
})
export class SingleArtComponent implements OnInit {
 id:number;
 singleArt:IArt;
  constructor(private _router:ActivatedRoute,
             private art:ArtService) { }

  ngOnInit(): void {
    this.id=this._router.snapshot.params.id;
    this.art.getSingleArt(this.id).subscribe((art:IArt)=>{
      this.singleArt=art;
    });
  }

}
