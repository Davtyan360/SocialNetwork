import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }
  arr;
  data
  ngOnInit(): void {
    this.postsFunc()
  }
  clickFunc(a) {
    console.log(a);
    if (a.getAttribute("src") == '../../assets/likeNA.png') {
      a.src = '../../assets/likeA.png'
    }
    else {
      a.src = '../../assets/likeNA.png'
    }
  }
  postsFunc() {
    this.http.get(`http://localhost:5000/api/all/posts/${this.route.snapshot.params['id']}`).subscribe(data => {
      this.data = data
      console.log(data)
    }, err => console.log(err))
  }
}
