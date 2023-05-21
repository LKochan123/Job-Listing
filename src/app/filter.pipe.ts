import { Pipe, PipeTransform } from "@angular/core";
import { JobOffer } from './job-offer/job-offer';

@Pipe({
    name: 'filterJobOffers',
    pure: false
})
export class FilterPipe implements PipeTransform {
    transform(jobOffers: JobOffer[], searchTags: string[]) {
      if (searchTags.length === 0) {
        return jobOffers;
      } else {
        return jobOffers.filter((jobOffer: JobOffer) => {
          return searchTags.every((singleTag: string) => {
            return (
              jobOffer.role === singleTag ||
              jobOffer.level === singleTag ||
              jobOffer.languages.includes(singleTag) ||
              jobOffer.tools.includes(singleTag)
            );
          });
        });
      }
    }
}
