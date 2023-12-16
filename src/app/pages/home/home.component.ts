import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  postFeatured: Array<any> = [];
  AllPost: Array<any> = [];
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.postLoader().subscribe(posts => {
      this.postFeatured = posts;
      console.log(this.postFeatured)
    })

    this.postService.AllPostLoader().subscribe(posts => {
      this.AllPost = posts;
      console.log(this.AllPost)
    })
  }

}
