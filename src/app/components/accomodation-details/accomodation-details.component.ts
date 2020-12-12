import { Component, OnInit } from '@angular/core';
import { AccomodationService } from 'src/app/service/accomodation.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Accomodation } from 'src/app/models/accomodation.model';


@Component({
  selector: 'app-accomodation-details',
  templateUrl: './accomodation-details.component.html',
  styleUrls: ['./accomodation-details.component.css']
})
export class AccomodationDetailsComponent implements OnInit {
  currentAccomodation: Accomodation = {
    address: '',
    facility: '',
    area : 0,
    price: 0,
    userID: 0,
    image: ''
  };
  message = '';

  constructor(
    private accomodationService: AccomodationService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getAccomodation(this.route.snapshot.params.id);
  }

  getAccomodation(id: string): void {
    this.accomodationService.get(id)
      .subscribe(
        data => {
          this.currentAccomodation = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateAccomodation(): void {
    this.accomodationService.update(this.currentAccomodation.id, this.currentAccomodation)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message;
          this.router.navigate(['/']);
        },
        error => {
          console.log(error);
        });
  }

}