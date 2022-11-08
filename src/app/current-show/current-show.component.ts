import { Component, OnInit, Input } from '@angular/core';
import { IcurrentShow } from '../icurrent-show';



@Component({
  selector: 'app-current-show',
  templateUrl: './current-show.component.html',
  styleUrls: ['./current-show.component.css']
})
export class CurrentShowComponent implements OnInit {
  
  @Input() current: IcurrentShow

  constructor() { 
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
   
  }

}
