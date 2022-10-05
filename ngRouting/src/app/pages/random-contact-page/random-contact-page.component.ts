import { Component, OnInit, Input } from '@angular/core';
import { IRandomContact, Results } from 'src/app/mocks/randomuser';
import { RandomUserService } from 'src/app/services/random-user.service';

@Component({
  selector: 'app-random-contact-page',
  templateUrl: './random-contact-page.component.html',
  styleUrls: ['./random-contact-page.component.css']
})
export class RandomContactPageComponent implements OnInit {

  contact: IRandomContact | undefined;

  constructor(
    private randomUserService: RandomUserService
  ) { }

  ngOnInit(): void {
  }

  getNewContact() {
    this.randomUserService.getRandomContact().subscribe(
      {
        next: (response: Results) => {
          this.contact = response.results[0];
        },
        error: (error) => console.error(error),
        complete: () => console.info('Petición de random contact terminada')
      }
    );
  }

  getListContacts(n: number) {
    this.randomUserService.getRandomContacts(n).subscribe(
      {
        next: (response: Results) => {
          console.log(response);
        },
        error: (error) => console.error(error),
        complete: () => console.info('Petición de random contact terminada')
      }
    );
  }
}
