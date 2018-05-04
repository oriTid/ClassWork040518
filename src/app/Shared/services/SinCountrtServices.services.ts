

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";


@Injectable()

export class allCountriesAPI {

    allCountriesInfo: any = {allinfo: []};

    constructor(private myHttpClient: HttpClient) {

        let apiUrl: string = `https://restcountries.eu/rest/v2/all?fields=flag;population;capital;nativeName;name`;

        this.myHttpClient.get(apiUrl)
            .subscribe((x: any) => { this.allCountriesInfo.allinfo = x; });

    }  

}

