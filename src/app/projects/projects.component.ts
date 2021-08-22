import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import WebViewer from '@pdftron/webviewer';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit, AfterViewInit {
	wvInstance: any;
	@ViewChild('viewer') viewer: ElementRef

  constructor(private spinner: NgxSpinnerService) { }

  ngAfterViewInit(): void {
  	WebViewer({
  		path: '../assets/lib',
  		initialDoc: '../assets/Temporal.pdf'
  	}, this.viewer.nativeElement).then(instance => {
      this.wvInstance = instance;

      // now you can access APIs through this.webviewer.getInstance()
      //instance.openElements(['notesPanel']);
      // see https://www.pdftron.com/documentation/web/guides/ui/apis for the full list of APIs

      // or listen to events from the viewer element
      this.viewer.nativeElement.addEventListener('pageChanged', (e) => {
        const [ pageNumber ] = e.detail;
        console.log(`Current page is ${pageNumber}`);
      });

      // or from the docViewer instance
      instance.docViewer.on('annotationsLoaded', () => {
        console.log('annotations loaded');
      });

      instance.docViewer.on('documentLoaded', this.wvDocumentLoadedHandler)
    })
  }

  ngOnInit() {

    ngOnInit(): void {
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 5000);
  }


    this.wvDocumentLoadedHandler = this.wvDocumentLoadedHandler.bind(this);
  }

  wvDocumentLoadedHandler(): void {
    // you can access docViewer object for low-level APIs
    // and access classes defined in the WebViewer iframe
    const { Annotations, annotManager, docViewer } = this.wvInstance;
    const rectangle = new Annotations.RectangleAnnotation();
    // rectangle.PageNumber = 1;
    // rectangle.X = 100;
    // rectangle.Y = 100;
    // rectangle.Width = 250;
    // rectangle.Height = 250;
    // rectangle.StrokeThickness = 1;
    rectangle.Author = annotManager.getCurrentUser();
    annotManager.addAnnotation(rectangle);
    annotManager.drawAnnotations(rectangle.PageNumber);
    // see https://www.pdftron.com/api/web/WebViewer.html for the full list of low-level APIs
  }

}
