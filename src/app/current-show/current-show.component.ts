import { Component, OnInit } from '@angular/core';
import { IcurrentShow } from '../icurrent-show';
import { CurrentShowServiceService } from '../current-show-service.service';
import { ICurrentShowData } from '../icurrent-show-data';


@Component({
  selector: 'app-current-show',
  templateUrl: './current-show.component.html',
  styleUrls: ['./current-show.component.css']
})
export class CurrentShowComponent implements OnInit {
  
  current: IcurrentShow

  constructor(private showService:CurrentShowServiceService) { 
    this.current = {
      name: '',
      image: '',
      network:'',
      rating: -1,
      runtime: -1,
      premiered: '',
      ending: '',
      summary: '',
      schedule:'',
      genres: ''

    }
  }

  ngOnInit(): void {
   
  }

}
