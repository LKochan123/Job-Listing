import { Injectable } from '@angular/core';
import { JobOffer } from './job-offer.model';
import { SearchService } from '../search/search.service';

@Injectable()
export class JobOfferService {

  constructor(private searchService: SearchService) { }

  jobOffers: JobOffer[] = [
    new JobOffer(1, "Photosnap", "../images/photosnap.svg", true, true, "Senior Frontend Developer", 
    "Frontend", "Senior", "1d ago", "Full Time", "USA Only", ["HTML", "CSS", "JavaScript"], []),
    new JobOffer(2, "Manage", "./images/manage.svg", true, true, "Fullstack Developer", 
    "Fullstack", "Midweight", "1d ago", "Part Time", "Remote", ["Python"], ["React"])
  ]

  getAllJobOffers() {
    return this.jobOffers;
  }

  addToSearchList(element: string) {
    this.searchService.addFilterTag(element);
  }

}
