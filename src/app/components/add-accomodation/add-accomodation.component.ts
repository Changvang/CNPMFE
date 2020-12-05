
import { Component, OnInit } from '@angular/core';
import { Accomodation } from 'src/app/models/accomodation.model';
import { AccomodationService } from 'src/app/service/accomodation.service';

@Component({
  selector: 'app-add-accomodation',
  templateUrl: './add-accomodation.component.html',
  styleUrls: ['./add-accomodation.component.css']
})
export class AddAccomodationComponent implements OnInit {
  accomodation: Accomodation = {
    address: '',
    facility: '',
    area: -1,
    price: -1
  };
  submitted = false;

  constructor(private accomodationService: AccomodationService) { }

  ngOnInit(): void {
  }

  saveAccomodation(): void {
    const data = {
      address: this.accomodation.address,
      facility: this.accomodation.facility,
      area: this.accomodation.area,
      price: this.accomodation.price
    };

    this.accomodationService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newAccomodation(): void {
    this.submitted = false;
    this.accomodation = {
      address: '',
      facility: '',
      id: -1,
      price: -1,
      userID: 0
    };
  }

}
