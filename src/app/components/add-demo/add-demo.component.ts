import { Component, OnInit } from '@angular/core';
import { Demo } from 'src/app/models/demo/demo.model';
import { DemoService } from 'src/app/service/demo.service';

@Component({
  selector: 'app-add-demo',
  templateUrl: './add-demo.component.html',
  styleUrls: ['./add-demo.component.css']
})
export class AddDemoComponent implements OnInit {
  demo: Demo = {
    title: '',
    description: '',
    published: false
  };
  submitted = false;

  constructor(private demoService: DemoService) { }

  ngOnInit(): void {
  }

  saveDemo(): void {
    const data = {
      title: this.demo.title,
      description: this.demo.description
    };

    this.demoService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newDemo(): void {
    this.submitted = false;
    this.demo = {
      title: '',
      description: '',
      published: false
    };
  }

}
