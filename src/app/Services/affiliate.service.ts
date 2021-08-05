import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { AffiliateImage } from '../models/affiliate';
import { Subject } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AffiliateService {

  public images: AffiliateImage[] = [];
  private images$ = new Subject<AffiliateImage[]>();

  constructor(private http: HttpClient) { }

  addAffiliates(name: string, image: File): void {
    const imageData = new FormData();
    imageData.append("name", name);
    imageData.append("image", image, name);
    this.http.post<{ affiliates: AffiliateImage }>('affiliate/affiliatePost', imageData)
      .subscribe((imageData) => {
        const images: AffiliateImage = {
          _id: imageData.affiliates._id,
          name: name,
          image: imageData.affiliates.image,
        };
        this.images.push(images);
        this.images$.next(this.images);
        //console.log(this.images);
      });
  }

  getAffiliate(id): Observable<any> {
    return this.http.get<any>('affiliate/affiliatePost/'+ id);
  }

  getAffiliates() {
    this.http
      .get<{ images: AffiliateImage[] }>('affiliate/affiliatePost')
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
