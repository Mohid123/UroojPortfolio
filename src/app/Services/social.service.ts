import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Social } from '../models/social';
import { Subject } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SocialService {

  public images: Social[] = [];
  private images$ = new Subject<Social[]>();

  constructor(private http: HttpClient) { }

  addSocial(name: string, image: File): void {
    const imageData = new FormData();
    imageData.append("name", name);
    imageData.append("image", image, name);
    this.http.post<{ social: Social }>('social/socialPost', imageData)
      .subscribe((imageData) => {
        const images: Social = {
          _id: imageData.social._id,
          name: name,
          image: imageData.social.image,
        };
        this.images.push(images);
        this.images$.next(this.images);
        //console.log(this.images);
      });
  }

  getSocial(id): Observable<any> {
    return this.http.get<any>('social/socialPost/'+ id);
  }

  getSocials() {
    this.http
      .get<{ images: Social[] }>('social/socialPost')
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
