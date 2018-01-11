import { Component, OnInit } from '@angular/core';
import { GameModel } from '../../layout/gameBox/models/gameBoxModel';

@Component({
    selector: 'shoppingCart',
    templateUrl: './shoppingCart.component.html',
    styleUrls: ['./shoppingCart.component.css']
})
export class ShoppingCartComponent implements OnInit {

    games: Array<GameModel>;

    constructor() { 

        this.games = new Array<GameModel>();
    }

    ngOnInit() { }
} 