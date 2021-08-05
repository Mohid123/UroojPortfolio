import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Fashion } from '../models/fashion';
import { Subject } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class FashionService {

  public images: Fashion[] = [];
  private images$ = new Subject<Fashion[]>();

  constructor(private http: HttpClient) { }

  addFashions(name: string, image: File): void {
    const imageData = new FormData();
    imageData.append("name", name);
    imageData.append("image", image, name);
    this.http.post<{ fashion: Fashion }>('fashion/fashionPost', imageData)
      .subscribe((imageData) => {
        const fashion: Fashion = {
          _id: imageData.fashion._id,
          name: name,
          image: imageData.fashion.image,
        };
        this.images.push(fashion);
        this.images$.next(this.images);
        //console.log(this.images);
      });
  }

  getFashion(id): Observable<any> {
    return this.http.get<any>('fashion/fashionPost/'+ id);
  }

  getFashions() {
    this.http
      .get<{ images: Fashion[] }>('fashion/fashionPost')
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
