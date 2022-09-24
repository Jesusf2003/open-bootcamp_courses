import { Component, OnInit } from '@angular/core';
import { IRandomContact, Results } from 'src/app/mocks/randomuser';
import { RandomUserService } from 'src/app/services/random-user.service';

@Component({
  selector: 'app-random-user',
  templateUrl: './random-user.component.html',
  styleUrls: ['./random-user.component.css']
})
export class RandomUserComponent implements OnInit {

  randomResults: Results | undefined;
  randomContact: IRandomContact | undefined;

  constructor(
    private randomUserService: RandomUserService
  ) { }

  ngOnInit(): void {
    this.randomUserService.getRandomContact().subscribe(
      (results: Results) => {
        this.randomContact = results.results[0];
        console.table(this.randomContact.name);
      }
    );
  }
}
