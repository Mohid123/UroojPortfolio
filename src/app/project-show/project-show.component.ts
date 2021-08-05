import { Component, OnInit } from '@angular/core';
import { flyinout, expand } from '../animations/app.animation';

@Component({
  selector: 'app-project-show',
  templateUrl: './project-show.component.html',
  styleUrls: ['./project-show.component.css'],
  host: {
    '[@flyinout]': 'true',
    'style': 'display: block;'
  },
  animations: [
  flyinout(),
  expand()
  ]
})
export class ProjectShowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
