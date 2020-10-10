import { Component, OnInit } from '@angular/core';
import { CvService } from "../cv.service";

@Component({
  selector: 'app-curriculum-vitae',
  templateUrl: './curriculum-vitae.component.html',
  styleUrls: ['./curriculum-vitae.component.css']
})
export class CurriculumVitaeComponent implements OnInit {
  curriculums;
  constructor(public cv: CvService) {
  }

  ngOnInit(): void {
    this.cv.getData("http://localhost:5001/api/CV").subscribe((res) => this.curriculums = res)
    console.log(this.curriculums)
  }
}
