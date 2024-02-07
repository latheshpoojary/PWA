import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

export interface Post{
  userId: number,
  id: number,
  title: string,
  body:string
}

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {


  posts!: Post[];
  constructor(private http: HttpClient) {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe((res:any) => {
      this.posts = res;
    })
  }
}
