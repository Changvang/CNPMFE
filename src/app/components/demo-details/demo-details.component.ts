import { Component, OnInit } from '@angular/core';
import { DemoService } from 'src/app/service/demo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Demo } from 'src/app/models/demo/demo.model';

@Component({
  selector: 'app-demo-details',
  templateUrl: './demo-details.component.html',
  styleUrls: ['./demo-details.component.css']
})
export class DemoDetailsComponent implements OnInit {
  currentDemo: Demo = {
    title: '',
    description: '',
    published: false
  };
  message = '';

  constructor(
    private demoService: DemoService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getDemo(this.route.snapshot.params.id);
  }

  getDemo(id: string): void {
    this.demoService.get(id)
      .subscribe(
        data => {
          this.currentDemo = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updatePublished(status: boolean): void {
    const data = {
      title: this.currentDemo.title,
      description: this.currentDemo.description,
      published: status
    };

    this.demoService.update(this.currentDemo.id, data)
      .subscribe(
        response => {
          this.currentDemo.published = status;
          console.log(response);
          this.message = response.message;
        },
        error => {
          console.log(error);
        });
  }

  updateDemo(): void {
    this.demoService.update(this.currentDemo.id, this.currentDemo)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message;
        },
        error => {
          console.log(error);
        });
  }

  deleteDemo(): void {
    this.demoService.delete(this.currentDemo.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/demos']);
        },
        error => {
          console.log(error);
        });
  }
}