import { Component, OnInit, Input } from '@angular/core';
import { JobOfferService } from './job-offer.service';
import { JobOffer } from './job-offer.model';
import { SearchService } from '../search/search.service';

@Component({
  selector: 'app-job-offer',
  templateUrl: './job-offer.component.html',
  styleUrls: ['./job-offer.component.scss']
})

export class JobOfferComponent implements OnInit {

  searchTags!: string[];
  jobOfferList!: JobOffer[];

  constructor(private jobOfferService: JobOfferService,
    private searchService: SearchService) { }

  ngOnInit() {
    this.jobOfferList = this.jobOfferService.getAllJobOffers();
    this.searchTags = this.searchService.getAllFilters();
  }

  addToSearchList(element: string) {
    if (!this.searchService.search_list.includes(element)) {
      this.jobOfferService.addToSearchList(element);
    }
  }
}
