import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostService } from '../Services/post.service';
import { NgbActiveModal, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { BlogImage } from "../models/blogimage";
import { Subscription } from "rxjs";
import { FlashMessagesService } from 'angular2-flash-messages';
import { BlogImageService } from '../Services/blog-image.service';
import { flyinout, expand } from '../animations/app.animation';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-blog-articles',
  templateUrl: './blog-articles.component.html',
  styleUrls: ['./blog-articles.component.css'],
  host: {
    '[@flyinout]': 'true',
    'style': 'display: block;'
  },
  animations: [
  flyinout(),
  expand()
  ]
})
export class BlogArticlesComponent implements OnInit {

   public images: BlogImage[] = [];
   private imageSubscription: Subscription;
   closeResult = '';
   today = new Date();

  constructor(private postService: PostService,
    private modalService: NgbModal,
    private flashMessage: FlashMessagesService,
    private imageService: BlogImageService,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.imageService.getImages();
     this.imageSubscription = this.imageService
      .getImagesStream()
      .subscribe((images: BlogImage[]) => {
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
