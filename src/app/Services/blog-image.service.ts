import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { BlogImage } from '../models/blogimage';
import { Subject } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class BlogImageService {

	public images: BlogImage[] = [];
  private images$ = new Subject<BlogImage[]>();

  constructor(private http: HttpClient) { }

addImages(name: string, image: File): void {
    const imageData = new FormData();
    imageData.append("name", name);
    imageData.append("image", image, name);
    this.http.post<{ images: BlogImage }>('blogs/blogImage', imageData)
      .subscribe((imageData) => {
        const images: BlogImage = {
          _id: imageData.images._id,
          name: name,
          image: imageData.images.image,
        };
        this.images.push(images);
        this.images$.next(this.images);
        //console.log(this.images);
      });
  }

  getImage(id): Observable<any> {
    return this.http.get<any>('blogs/blogImage/'+ id);
  }

  getImages() {
    this.http
      .get<{ images: BlogImage[] }>('blogs/blogImage')
      .pipe(
        map((imageData) => {
          return imageData.images;
        })
      )
      .subscribe((images) => {
        this.images = images;
        //console.log(images);
        this.images$.next(this.images);
      });
  }

  getImagesStream() {
    return this.images$.asObservable();
  }

  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
