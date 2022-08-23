import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-details-page',
  templateUrl: './contact-details-page.component.html',
  styleUrls: ['./contact-details-page.component.css']
})
export class ContactDetailsPageComponent implements OnInit {

  id: any | undefined;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    // Vamos a leer los parámetros
    this.route.params.subscribe(
      (params: any) => {
        if (params.id) {
          this.id = params.id;
        }
      }
    );

    // this.route.parent?.params
  }
}
