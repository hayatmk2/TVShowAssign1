import { Component, OnInit } from '@angular/core';
import { IcurrentShow } from '../icurrent-show';
import { CurrentShowServiceService } from '../current-show-service.service';


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
      genres:'',
      image: '',
     // schedule: '',
     days: '',
     time: '',
      rating: 0,
      network: '',
      summary: '',
      runtime: 0,
      premiered: '',
      ending: '',
    }
  }

  ngOnInit(): void {
    this.showService.CurrentShow('Girls').subscribe(data => this.current = data)
  }

}
