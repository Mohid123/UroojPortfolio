import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
  // host: {
  //   '[@flyinout]': 'true',
  //   'style': 'display: block;'
  // },
  // animations: [
  // flyinout(),
  // expand()
  // ]
})
export class ProfileComponent implements OnInit {

	@ViewChild(MatAccordion) accordion: MatAccordion;

  constructor() { }

  ngOnInit(): void {
  }

  closeDropdown() {
    const drop = <HTMLInputElement>document.querySelector('#dropdown');
    drop.style.display = 'none';
  }

}
