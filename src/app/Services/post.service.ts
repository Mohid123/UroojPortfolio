import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of, throwError } from "rxjs";
//import "rxjs/add/operator/map";

export interface post {
  success: boolean;
  post: any;
  token: any;
  posts: any;
}

@Injectable({
  providedIn: "root"
})
export class PostService {

 public baseUri: string = "/blogs";
 public headers = new HttpHeaders().set("Content-Type", "application/json");

  constructor(private http: HttpClient) {}

  getPosts(): Observable<post> {
    return this.http.get<post>(this.baseUri + "/allPosts");
  }

 addPost(post): Observable<post> {
    return this.http.post<post>(this.baseUri + "/newPost", post);
  }
}
