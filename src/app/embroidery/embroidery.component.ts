import { Component, OnInit } from '@angular/core';
import { EmbroideryService } from '../Services/embroidery.service';
import { NgbActiveModal, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Embroidery } from "../models/embroidery";
import { Subscription } from "rxjs";
import { MatCarousel, MatCarouselComponent } from '@ngbmodule/material-carousel';
import { flyinout, expand } from '../animations/app.animation';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-embroidery',
  templateUrl: './embroidery.component.html',
  styleUrls: ['./embroidery.component.css'],
  host: {
    '[@flyinout]': 'true',
    'style': 'display: block;'
  },
  animations: [
  flyinout(),
  expand()
  ]
})
export class EmbroideryComponent implements OnInit {

   public images: Embroidery[] = [];
   private imageSubscription: Subscription;
   closeResult = '';

  constructor(private embroideryService: EmbroideryService,
    private modalService: NgbModal,
    private spinner: NgxSpinnerService) {
  }

  ngOnInit(): void {
    this.spinner.show();
  	this.embroideryService.getEmbroideries();
     this.imageSubscription = this.embroideryService
      .getImagesStream()
      .subscribe((images: Embroidery[]) => {
        this.images = images;
        images.sort();
        images.reverse();
        //console.log(images);
        this.spinner.hide();
      });
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
