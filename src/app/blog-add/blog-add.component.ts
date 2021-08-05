import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { Gallery } from "../models/gallery";
import { PostService } from "../Services/post.service";
import { BlogImageService } from "../Services/blog-image.service";
import { Router } from '@angular/router';
import * as Editor from '../ckeditor5/build/ckeditor';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-blog-add',
  templateUrl: './blog-add.component.html',
  styleUrls: ['./blog-add.component.css']
})

export class BlogAddComponent implements OnInit {

  form: FormGroup;
  gallery: Gallery;
  imageData: string;
  public editor = Editor;
  config;

  constructor(private postService: PostService, private router: Router,
    private flashMessage: FlashMessagesService,
    private imageService: BlogImageService) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null),
      image: new FormControl(null),
    });

    this.config = {
      toolbar: {
        styles: [
            'alignLeft', 'alignCenter', 'alignRight', 'full', 'side'
            ],
        items: [
          'ckfinder',
          'heading',
          '|',
          'fontSize',
          '|',
          'bold',
          'italic',
          'underline',
          'highlight',
          '|',
          'alignment',
          '|',
          'numberedList',
          'bulletedList',
          '|',
          'indent',
          'outdent',
          '|',
          'todoList',
          'link',
          'blockQuote',
          'insertTable',
          '|',
          'undo',
          'redo'
        ]
      },
      language: 'en',
      image: {
        resizeOptions: [
            {
                name: 'resizeImage:original',
                value: null,
                icon: 'original'
            },
            {
                name: 'resizeImage:50',
                value: '50',
                icon: 'medium'
            },
            {
                name: 'resizeImage:75',
                value: '75',
                icon: 'large'
            }
        ],
        toolbar: [
          'resizeImage',
          '|',
          'imageTextAlternative',
          'resizeImage:50',
          'resizeImage:75',
          'resizeImage:original',
          'insertImage'
        ]
      },
      table: {
        contentToolbar: [
          'tableColumn',
          'tableRow',
          'mergeTableCells'
        ]
      }
    }

   }

   onFileSelect(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({ image: file });
    const allowedMimeTypes = ["image/png", "image/jpeg", "image/jpg"];
    if (file && allowedMimeTypes.includes(file.type)) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageData = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
    this.imageService.addImages(this.form.value.name, this.form.value.image);
    this.router.navigate(['/blog-articles']);
    this.form.reset();
    this.imageData = null;
  }

}