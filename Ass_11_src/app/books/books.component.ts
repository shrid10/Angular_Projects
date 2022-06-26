import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  "Books":[
    {"t1": "ng book - The Complete Book on Angular"},
    {"t2": "Christopher Bishop - Pattern Recognition and Machine Learning-Springer (2007)"},
    {"t3": "Ajay Mittal - Programming in C"}
  ]

}
