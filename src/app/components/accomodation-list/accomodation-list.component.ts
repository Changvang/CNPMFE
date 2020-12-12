
import { Component, OnInit } from '@angular/core';
import { Accomodation } from 'src/app/models/accomodation.model';
import { AccomodationService } from 'src/app/service/accomodation.service';
import { Comment } from 'src/app/models/comment.model';
import { CommentService } from 'src/app/service/comment.service';

@Component({
  selector: 'app-accomodation-list',
  templateUrl: './accomodation-list.component.html',
  styleUrls: ['./accomodation-list.component.css']
})
export class AccomodationListComponent implements OnInit {
  accomodations?: Accomodation[];
  currentAccomodation?: Accomodation;
  currentIndex = -1;
  comments?: Comment[];
  address = '';
  numOfAcc = 0;
  image = 0;

  constructor(
    private accomodationService: AccomodationService,
    private commentService: CommentService
  ) { }

  ngOnInit(): void {
    this.retrieveAccomodations();
  }

  retrieveAccomodations(): void {
    this.accomodationService.getAll()
      .subscribe(
        data => {
          this.accomodations = data;
          this.numOfAcc = Object.keys(this.accomodations).length
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
          this.numOfAcc = Object.keys(this.accomodations).length
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  setActiveAccomodation(accomodation: Accomodation, index: number): void {
    this.currentAccomodation = accomodation;
    this.currentIndex = index;
    this.searchComment();
    this.getImage();
  }

  searchComment(): void {
    if (this.currentAccomodation !== undefined) {
      this.commentService.findByAcccode(this.currentAccomodation.id)
        .subscribe(
          data => {
            this.comments = data;
            console.log(data);
          },
          error => {
            console.log(error);
          }
        )
    }
  }

  getImage(): void{
    if (this.currentAccomodation !== undefined) {
      this.accomodationService.findImage(this.currentAccomodation.id)
        .subscribe(
          data => {
            this.image = data;
            console.log(data);
          },
          error => {
            console.log(error);
          }
        )
    }
  }
}