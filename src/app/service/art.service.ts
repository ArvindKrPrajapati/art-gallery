import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {IArt} from '../model/art.model';

import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ArtService {

  constructor(private http:HttpClient) { }
  
  getArts():Observable<IArt[]>{
    const url="http://localhost:8000/data";
   return this.http.get<IArt[]>(url);
  }
  
  getSingleArt(id):Observable<IArt>{
    const url="http://localhost:8000/data/"+id;
    return this.http.get<IArt>(url);
  }
  getData(){
    return [{
    "id": 1,
    "name": "Art Painting",
    "desc":"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    "price":50,
    "img": "http://learn-things.000webhostapp.com/images/a1.jpg"
  },
    {
      "id": 2,
      "name": "Art Painting",
      "desc":"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
      "price":50,
      "img": "http://learn-things.000webhostapp.com/images/a2.jpg"
    },
    {
      "id": 3,
      "name": "Art Painting",
      "desc":"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
      "price":50,
      "img": "http://learn-things.000webhostapp.com/images/a3.jpg"
    },
    {
      "id": 4,
      "name": "Art Painting",
      "desc":"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
      "price":50,
      "img": "http://learn-things.000webhostapp.com/images/a4.jpg"
    }];
  }
}
