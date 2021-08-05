import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Embroidery } from '../models/embroidery';
import { Subject } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class EmbroideryService {

  public images: Embroidery[] = [];
  private images$ = new Subject<Embroidery[]>();

  constructor(private http: HttpClient) { }

  addEmbroidery(image: File): void {
    const imageData = new FormData();
    imageData.append("image", image);
    this.http.post<{ embroideries: Embroidery }>('needlework/embroidery', imageData)
      .subscribe((imageData) => {
        const embroideries: Embroidery = {
          _id: imageData.embroideries._id,
          avatar: imageData.embroideries.avatar,
        };
        this.images.push(embroideries);
        this.images$.next(this.images);
        //console.log(this.images);
      });
  }

   getEmbroidery(id): Observable<any> {
    return this.http.get<any>('needlework/embroidery/'+ id);
  }

  getEmbroideries() {
    this.http
      .get<{ images: Embroidery[] }>('needlework/embroidery')
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
