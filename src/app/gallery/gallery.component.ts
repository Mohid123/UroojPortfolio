import { Component, OnInit, OnDestroy } from '@angular/core';
import { ImageUploadService } from '../Services/image-upload.service';
import { NgbActiveModal, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Gallery } from "../models/gallery";
import { Subscription } from "rxjs";
import { flyinout, expand } from '../animations/app.animation';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  host: {
    '[@flyinout]': 'true',
    'style': 'display: block;'
  },
  animations: [
  flyinout(),
  expand()
  ]
})
export class GalleryComponent implements OnInit {
   public images: Gallery[] = [];
   private imageSubscription: Subscription;
   closeResult = '';

  constructor(private imageService: ImageUploadService,
    private modalService: NgbModal,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
  	this.imageService.getImages();
     this.imageSubscription = this.imageService
      .getImagesStream()
      .subscribe((images: Gallery[]) => {
        this.images = images;
        images.sort();
        images.reverse();
        //console.log(images);
        this.spinner.hide();
      });
  }

   ngOnDestroy() {
    this.imageSubscription.unsubscribe();
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
