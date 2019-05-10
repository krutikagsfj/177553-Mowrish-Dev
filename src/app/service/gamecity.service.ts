import { GameList } from '../model/gameList.model';
import { Injectable } from '@angular/core';

//manually imported modules
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GamecityService {

  //json-server that acts as a Rest API containing gamelist details (Running on port 3000)
  gameListAPI = 'http://localhost:3000/game_list';

  constructor(private http: HttpClient) { }

  //gets the whole gamelist stored in ./database/GameList.json using json-server
  getGameList() {
    return this.http.get<GameList[]>(this.gameListAPI);
  }

}
