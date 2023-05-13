import { Pipe, PipeTransform } from "@angular/core";
import { JobOffer } from "./job-offer/job-offer.model";

@Pipe({
    name: 'filterJobOffers',
    pure: false
})
export class FilterPipe implements PipeTransform {
    transform(jobOffers: JobOffer[], searchTags: string[]) {
        const filterArray: JobOffer[] = [];
        if (searchTags.length === 0) {
            return jobOffers;
        } else {
            for (const singleTag of searchTags) {
                for (const jobOffer of jobOffers) {
                    if (jobOffer.role === singleTag || jobOffer.level === singleTag || 
                        jobOffer.languages.includes(singleTag) || jobOffer.tools.includes(singleTag)) {
                        if (!filterArray.includes(jobOffer)) {
                            filterArray.push(jobOffer);
                        }
                    }
                }   
            }
            return filterArray;
        }
    }
}