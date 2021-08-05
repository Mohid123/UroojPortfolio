import { Component, OnInit } from '@angular/core';
import { PostService } from '../Services/post.service';
import { NgbActiveModal, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Fashion } from "../models/fashion";
import { Subscription } from "rxjs";
import { FlashMessagesService } from 'angular2-flash-messages';
import { FashionService } from '../Services/fashion.service';
import { flyinout, expand } from '../animations/app.animation';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-fashion',
  templateUrl: './fashion.component.html',
  styleUrls: ['./fashion.component.css'],
  host: {
    '[@flyinout]': 'true',
    'style': 'display: block;'
  },
  animations: [
  flyinout(),
  expand()
  ]
})
export class FashionComponent implements OnInit {

  public images: Fashion[] = [];
   private imageSubscription: Subscription;
   closeResult = '';
   Posted = new Date();

  constructor(private postService: PostService,
    private modalService: NgbModal,
    private flashMessage: FlashMessagesService,
    private imageService: FashionService,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.imageService.getFashions();
     this.imageSubscription = this.imageService
      .getImagesStream()
      .subscribe((images: Fashion[]) => {
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
