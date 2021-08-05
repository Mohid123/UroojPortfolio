import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { Embroidery } from "../models/embroidery";
import { EmbroideryService } from "../Services/embroidery.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-needlework',
  templateUrl: './add-needlework.component.html',
  styleUrls: ['./add-needlework.component.css']
})
export class AddNeedleworkComponent implements OnInit {

  form: FormGroup;
  images: Embroidery;
  imageData: string;

  constructor(private embroideryService: EmbroideryService, private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      image: new FormControl(null)
    });
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
    this.embroideryService.addEmbroidery(this.form.value.image);
    this.router.navigate(['/embroidery']);
    this.form.reset();
    this.imageData = null;
  }

}
