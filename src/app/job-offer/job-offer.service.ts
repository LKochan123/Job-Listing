import { Injectable } from '@angular/core';
import { SearchService } from '../search/search.service';
import { HttpClient } from '@angular/common/http';
import { JobOffer } from './job-offer';

@Injectable()
export class JobOfferService {

  private _url: string = '../assets/data.json';

  constructor(private searchService: SearchService, 
    private http: HttpClient) { }

  getJobsByHttp() {
    return this.http.get<JobOffer[]>(this._url);
  }

  addToSearchList(element: string) {
    this.searchService.addFilterTag(element);
  }

}
