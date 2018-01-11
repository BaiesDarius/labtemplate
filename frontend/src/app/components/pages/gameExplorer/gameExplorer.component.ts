import { Component } from '@angular/core';
import { GameBoxModel } from '../../layout/gameBox/models/gameBoxModel';

@Component({
    selector: 'game-explorer',
    templateUrl: './gameExplorer.component.html',
    styleUrls: ['./gameExplorer.component.css']
})
export class GameExplorerComponent {

    games: Array<GameBoxModel>

    constructor() {

        this.games = new Array<GameBoxModel>();
     }
}