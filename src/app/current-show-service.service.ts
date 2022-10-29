import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICurrentShowData } from './icurrent-show-data';
import { windowWhen } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrentShowServiceService {

  constructor(private httpClient:HttpClient) { }

  CurrentShow (show:string){
    return this.httpClient.get<ICurrentShowData>(`
    https://api.tvmaze.com/singlesearch/shows?q=${show}`)
    
  }

}
