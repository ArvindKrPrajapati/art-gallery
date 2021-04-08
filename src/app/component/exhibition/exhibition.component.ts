import { Component, OnInit ,Output,EventEmitter} from '@angular/core';

import { ArtService } from '../../service/art.service';
import {IArt} from '../../model/art.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-exhibition',
  templateUrl: './exhibition.component.html',
  styleUrls: ['./exhibition.component.css']
})
export class ExhibitionComponent implements OnInit {
 data:IArt[]=[];
 
 constructor(private _service:ArtService,
             private _router:Router) { }

  ngOnInit(): void {
    this._service.getArts().subscribe((arts:IArt[])=>{
      this.data=arts;
    });
   }

  goToDetails(id):void{
    this._router.navigate(['art',id]);
  }
}
