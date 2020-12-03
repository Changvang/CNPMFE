import { Component, OnInit } from '@angular/core';
import { Demo } from 'src/app/models/demo/demo.model';
import { DemoService } from 'src/app/service/demo.service';

@Component({
  selector: 'app-add-demo',
  templateUrl: './adddemo.component.html',
  styleUrls: ['./add-demo.component.css']
})
export class AddDemoComponent implements OnInit {
  Demo: Demo = {
    title: '',
    description: '',
    published: false
  };
  submitted = false;

  constructor(private DemoService: DemoService) { }

  ngOnInit(): void {
  }

  saveDemo(): void {
    const data = {
      title: this.Demo.title,
      description: this.Demo.description
    };

    this.DemoService.create(data)
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
    this.Demo = {
      title: '',
      description: '',
      published: false
    };
  }

}
