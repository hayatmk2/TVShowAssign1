import { Component, OnInit } from '@angular/core';
import { IcurrentShow } from '../icurrent-show';


@Component({
  selector: 'app-current-show',
  templateUrl: './current-show.component.html',
  styleUrls: ['./current-show.component.css']
})
export class CurrentShowComponent implements OnInit {
  current: IcurrentShow
  constructor() { 
    this.current ={
      name: 'Girls',
      genres: 'Drama',
      image: '',
      schedule: 'Sunday',
      rating: 6.6,
      network: 'HBO',
      summary: 'A show about life'
    }
  }

  ngOnInit(): void {
  }

}
