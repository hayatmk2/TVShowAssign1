import { Component } from '@angular/core';
import { CurrentShowServiceService } from './current-show-service.service';
import { IcurrentShow } from './icurrent-show';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tvshow';

  currentShow: IcurrentShow = {
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

  constructor(private currentShowData: CurrentShowServiceService){

  }

  doSearch(searchValue: any){
    const userInput = searchValue
    this.currentShowData.CurrentShowData(userInput).subscribe(data => this.currentShow = data)
  }


}
