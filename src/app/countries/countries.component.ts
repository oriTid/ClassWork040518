import { Component, OnInit } from '@angular/core';
import { allCountriesAPI } from '../Shared/services/SinCountrtServices.services';


@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  localCountriesDetails: any;
  srchInput: string ;


  constructor(private myCountriesDataApi: allCountriesAPI) { //מתוך הסרביס

    this.localCountriesDetails = this.myCountriesDataApi.allCountriesInfo;

  }



  ngOnInit() {

  }

}
