import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { JobOfferComponent } from './job-offer/job-offer.component';
import { SearchComponent } from './search/search.component';
import { JobOfferService } from './job-offer/job-offer.service';
import { SearchService } from './search/search.service';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    JobOfferComponent,
    SearchComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [JobOfferService, SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
