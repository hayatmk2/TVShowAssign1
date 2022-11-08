import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICurrentShowData } from './icurrent-show-data';
import { windowWhen } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CurrentShowServiceService {

  constructor(private httpClient:HttpClient) { }

  CurrentShowData (show:string){
    return this.httpClient.get<ICurrentShowData>(`
    https://api.tvmaze.com/singlesearch/shows?q=${show}`).pipe(map(data => this.transformToICurrentShow(data)))
    
  }

  private transformToICurrentShow (data: ICurrentShowData){
  return{
    name: data.name,
    // not sure if I have to add array # for genres..
    genres: data.genres, 
    image: data.image.medium,
    //schedule: data.schedule,
    rating: data.rating.average,
    network: data.network.name,
    summary: data.summary,
    runtime: data.runtime,
    premiered: data.premiered,
    ending: data.ending,
    time: data.schedule.time,
    days: data.schedule.days[0]
    
    }



  }

}
