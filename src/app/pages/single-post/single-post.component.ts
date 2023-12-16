import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {
  singlePost: any = {};

  constructor(private route: ActivatedRoute,
    private service: PostService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.service.loadSinglePost(params['id']).subscribe(data => {
        this.singlePost = data;
        console.log(this.singlePost)
      });
      this.service.CountViews(params['id'])
    });
  }

}
