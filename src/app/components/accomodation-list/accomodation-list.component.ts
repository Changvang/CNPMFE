
import { Component, OnInit } from '@angular/core';
import { Accomodation } from 'src/app/models/accomodation.model';
import { AccomodationService } from 'src/app/service/accomodation.service';

@Component({
  selector: 'app-accomodation-list',
  templateUrl: './accomodation-list.component.html',
  styleUrls: ['./accomodation-list.component.css']
})
export class AccomodationListComponent implements OnInit {
  accomodations?: Accomodation[];
  currentAccomodation?: Accomodation;
  currentIndex = -1;
  address = '';

  constructor(private accomodationService: AccomodationService) { }

  ngOnInit(): void {
    this.retrieveAccomodations();
  }

  retrieveAccomodations(): void {
    this.accomodationService.getAll()
      .subscribe(
        data => {
          this.accomodations = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveAccomodations();
    this.currentAccomodation = undefined;
    this.currentIndex = -1;
  }

  searchAddress(): void {
    this.accomodationService.findByAddress(this.address)
      .subscribe(
        data => {
          this.accomodations = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  setActiveAccomodation(accomodation: Accomodation, index: number): void {
    this.currentAccomodation = accomodation;
    this.currentIndex = index;
  }
}