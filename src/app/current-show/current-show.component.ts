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
<<<<<<< HEAD
      image: '',
      network:'',
      rating: -1,
      runtime: -1,
=======
      genres:'',
      image: '',
     // schedule: '',
     days: '',
     time: '',
      rating: 0,
      network: '',
      summary: '',
      runtime: 0,
>>>>>>> 784970ee277d1d344b0b4ba8b626ae06323327df
      premiered: '',
      ending: '',
      summary: '',
      schedule:'',
      genres: ''

    }
  }

  ngOnInit(): void {
<<<<<<< HEAD
   
=======
    this.showService.CurrentShow('Girls').subscribe(data => this.current = data)
>>>>>>> 784970ee277d1d344b0b4ba8b626ae06323327df
  }

}
