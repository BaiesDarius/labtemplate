import { Component } from '@angular/core';
import { GameModel } from '../../layout/gameBox/models/gameBoxModel';
import { NotificationService } from '../../../service/notificationService';
import { ApiService } from '../../../service/api.service';
import { Cookie } from 'ng2-cookies/src/services';


@Component({
    selector: 'game-explorer',
    templateUrl: './gameExplorer.component.html',
    styleUrls: ['./gameExplorer.component.css']
})
export class GameExplorerComponent {

    games: Array<GameModel>;

    constructor(private apiService:ApiService) {

        this.games = new Array<GameModel>();
        var userid = Cookie.get("Id")
        var datasent = {
            id:userid
        }
        this.apiService.post("AllGames",datasent).subscribe(result => {
            if (result.success) {
                console.log(result);
                for(var game in result.games)
                {
                    if(result.games.hasOwnProperty(game))
                    {
                        this.games.push({
                            id: result.games[game].id as number,
                            title: result.games[game].title as string,
                            price: result.games[game].price as number,
                            description: result.games[game].description as string,
                            rating: result.games[game].rating as number
                            });
                    }
                }
            }
            else {
                console.log(result);
            }
        })

        
    }
}