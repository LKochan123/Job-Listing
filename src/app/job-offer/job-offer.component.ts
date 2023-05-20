import { Component, OnInit } from '@angular/core';
import { JobOfferService } from './job-offer.service';
import { JobOffer } from './job-offer';
import { SearchService } from '../search/search.service';

@Component({
  selector: 'app-job-offer',
  templateUrl: './job-offer.component.html',
  styleUrls: ['./job-offer.component.scss']
})

export class JobOfferComponent implements OnInit {

  searchTags!: string[];
  jobsHttp: JobOffer[] = [];

  constructor(private jobOfferService: JobOfferService,
    private searchService: SearchService) { }

  ngOnInit() {
    this.jobOfferService.getJobsByHttp().subscribe(data => {
      this.jobsHttp = data;
    })

    this.searchTags = this.searchService.getAllFilters();
  }

  addToSearchList(element: string) {
    if (!this.searchService.search_list.includes(element)) {
      this.jobOfferService.addToSearchList(element);
    }
  }

}
