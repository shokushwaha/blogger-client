import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.css']
})
export class SingleCategoryComponent implements OnInit {

  categotyPostArray: any = [];


  constructor(private route: ActivatedRoute, private postService: PostService) { }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.postService.loadCategoryPosts(params['id']).subscribe(data => {
        this.categotyPostArray = data;
      })
    });
  }

}
