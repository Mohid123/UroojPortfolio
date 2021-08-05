import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Misc } from '../models/misc';
import { Subject } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class MiscService {
  public images: Misc[] = [];
  private images$ = new Subject<Misc[]>();

  constructor(private http: HttpClient) { }

  addMiscs(name: string, image: File): void {
    const imageData = new FormData();
    imageData.append("name", name);
    imageData.append("image", image, name);
    this.http.post<{ misc: Misc }>('misc/miscPost', imageData)
      .subscribe((imageData) => {
        const images: Misc = {
          _id: imageData.misc._id,
          name: name,
          image: imageData.misc.image,
        };
        this.images.push(images);
        this.images$.next(this.images);
        //console.log(this.images);
      });
  }

  getMisc(id): Observable<any> {
    return this.http.get<any>('misc/miscPost/'+ id);
  }

  getMiscs() {
    this.http
      .get<{ images: Misc[] }>('misc/miscPost')
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
