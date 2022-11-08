import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-search-tvshow',
  templateUrl: './search-tvshow.component.html',
  styleUrls: ['./search-tvshow.component.css']
})
export class SearchTvshowComponent implements OnInit {

  @Output() searchShow = new EventEmitter<any>()
  //When <string> is used - plugging in data for emit in line 22 doesn't work.//
  
  search = new FormControl('', [Validators.required])
  
  constructor() { }

  ngOnInit(): void {
    this.search.valueChanges.pipe(debounceTime(1000)).subscribe(data => {
      if (!this.search.invalid){
        this.searchShow.emit(data)
      }
    })
  }

}
