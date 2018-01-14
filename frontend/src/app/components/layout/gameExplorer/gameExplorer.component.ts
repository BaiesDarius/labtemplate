import { Component } from '@angular/core';
import { GameModel } from '../../layout/gameBox/models/gameBoxModel';
import { NotificationService } from '../../../service/notificationService';


@Component({
    selector: 'game-explorer',
    templateUrl: './gameExplorer.component.html',
    styleUrls: ['./gameExplorer.component.css']
})
export class GameExplorerComponent {

    games: Array<GameModel>;

    constructor() {

        this.games = new Array<GameModel>();

        this.games.push({
            id: 3,
            title: "game0",
            description: "description",
            price: 4,
            rating: 1,
        });
        this.games.push({
            id: 3,
            title: "game1",
            description: "description",
            price: 4,
            rating: 0.4,
        });
        this.games.push({
            id: 3,
            title: "game2",
            description: "description",
            price: 4,
            rating: 5,
        });
        this.games.push({
            id: 3,
            title: "game3",
            description: "description",
            price: 4,
            rating: 3.4,
        });
        this.games.push({
            id: 3,
            title: "game4",
            description: "description",
            price: 4,
            rating: 1.2,
        });
        this.games.push({
            id: 3,
            title: "game5",
            description: "description",
            price: 4,
            rating: 4,
        });
        this.games.push({
            id: 3,
            title: "game6",
            description: "description",
            price: 4.5,
            rating: 3,
        });

        this.games.push({
            id: 3,
            title: "game7",
            description: "description",
            price: 5,
            rating: 3,
        });
    }
}