import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-cards',
  templateUrl: './post-cards.component.html',
  styleUrls: ['./post-cards.component.css']
})
export class PostCardsComponent implements OnInit{
  constructor() { }
  
  @Input() postData = [] as any;
  
  ngOnInit(): void {
    console.log(this.postData)
  }

}
