import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { CurrentShowComponent } from './current-show/current-show.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{ MatToolbarModule } from '@angular/material/toolbar'
import{ MatCardModule } from '@angular/material/card'
import{ MatInputModule } from '@angular/material/input'
import{ MatIconModule } from '@angular/material/icon'
import{ MatFormFieldModule } from '@angular/material/form-field'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchTvshowComponent } from './search-tvshow/search-tvshow.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrentShowComponent,
    SearchTvshowComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
