import { Component, OnInit } from '@angular/core';
import { Demo } from 'src/app/models/demo/demo.model';
import { DemoService } from 'src/app/service/demo.service';

@Component({
  selector: 'app-demos-list',
  templateUrl: './demos-list.component.html',
  styleUrls: ['./demos-list.component.css']
})
export class DemosListComponent implements OnInit {
  demos?: Demo[];
  currentDemo?: Demo;
  currentIndex = -1;
  title = '';

  constructor(private demoService: DemoService) { }

  ngOnInit(): void {
    this.retrieveDemos();
  }

  retrieveDemos(): void {
    this.demoService.getAll()
      .subscribe(
        data => {
          this.demos = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveDemos();
    this.currentDemo = undefined;
    this.currentIndex = -1;
  }

  setActiveDemo(demo: Demo, index: number): void {
    this.currentDemo = demo;
    this.currentIndex = index;
  }

  removeAllDemos(): void {
    this.demoService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  searchTitle(): void {
    this.demoService.findByTitle(this.title)
      .subscribe(
        data => {
          this.demos = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}