import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void 
  {}


  "Techs":[
    {"t1": "Angular"},
    {"t2": "Machine Learning"},
    {"t3": "C Programming"}
  ]

  
}

