import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { YoutubeImage } from '../models/youtube';
import { Subject } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  public images: YoutubeImage[] = [];
  private images$ = new Subject<YoutubeImage[]>();

  constructor(private http: HttpClient) { }

  addYoutubes(name: string, image: File): void {
    const imageData = new FormData();
    imageData.append("name", name);
    imageData.append("image", image, name);
    this.http.post<{ youtubes: YoutubeImage }>('youtube/youtubePost', imageData)
      .subscribe((imageData) => {
        const images: YoutubeImage = {
          _id: imageData.youtubes._id,
          name: name,
          image: imageData.youtubes.image,
        };
        this.images.push(images);
        this.images$.next(this.images);
        console.log(this.images);
      });
  }

  getYoutube(id): Observable<any> {
    return this.http.get<any>('youtube/youtubePost/'+ id);
  }

  getYoutubes() {
    this.http
      .get<{ images: YoutubeImage[] }>('youtube/youtubePost')
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
