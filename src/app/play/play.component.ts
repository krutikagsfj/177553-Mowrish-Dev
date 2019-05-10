import { Router } from '@angular/router';
import { GamecityService } from '../service/gamecity.service';
import { GameList } from '../model/gameList.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  gameList: GameList[];
  balanceAmount: number = 0;

  constructor(private gameService: GamecityService, private route: Router) { }

  ngOnInit() {

    //getting the amount stored in localstorage
    let amountToPay = localStorage.getItem('amountToPay');
    if(+amountToPay>100)
      this.balanceAmount = +amountToPay - 100;

    //using service layers the gamelist is received and sent to the ui for display
    this.gameService.getGameList().subscribe(
      data => this.gameList = data
    );

  }

  //deducting the balance when playnow button is clicked
  play(gameAmount: number) {
    if(this.balanceAmount >= gameAmount) {
      this.balanceAmount -= gameAmount; //Deducting the game amount from card balance
      localStorage.setItem('amountToPay', (this.balanceAmount + 100).toString()); //setting local storage so that if the page is reloaded the updated card balance is displayed
      alert(`Balance has been deducted. Your updated card balance : ${this.balanceAmount}`);
      this.route.navigate(['/play']);
    } else {
      alert('Insufficient Balance.'); //alerting the user incase of insufficient balance
      this.route.navigate(['/play']);
    }
  }

}
