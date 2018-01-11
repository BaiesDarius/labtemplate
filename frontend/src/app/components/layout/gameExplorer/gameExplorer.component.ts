import { Component } from '@angular/core';
import { GameBoxModel } from '../../layout/gameBox/models/gameBoxModel';
import { NotificationService } from '../../../service/notificationService';

@Component({
    selector: 'game-explorer',
    templateUrl: './gameExplorer.component.html',
    styleUrls: ['./gameExplorer.component.css']
})
export class GameExplorerComponent{

    games: Array<GameBoxModel>;

    constructor() {

        this.games = new Array<GameBoxModel>();

        this.games.push({
            title:"game0",
            description:"description",
            price : 4,
            rating : 1,
        });
        this.games.push({
            title:"game1",
            description:"description",
            price : 4,
            rating : 0.4,
        });
        this.games.push({
            title:"game2",
            description:"description",
            price : 4,
            rating : 5,
        });
        this.games.push({
            title:"game3",
            description:"description",
            price : 4,
            rating : 3.4,
        });
        this.games.push({
            title:"game4",
            description:"description",
            price : 4,
            rating : 1.2,
        });
                this.games.push({
            title:"game5",
            description:"description",
            price : 4,
            rating : 4,
        });
        this.games.push({
            title:"game6",
            description:"description",
            price : 4.5,
            rating : 3,
        });
        
        this.games.push({
            title:"game7",
            description:"description",
            price : 5,
            rating : 3,
        });
     }
}