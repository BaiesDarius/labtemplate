import { Component, OnInit } from '@angular/core';
import { GameModel } from '../../layout/gameBox/models/gameBoxModel';
import { MatTableDataSource } from '@angular/material/table';
import {SelectionModel } from '@angular/cdk/collections';

@Component({
    selector: 'gamesTable',
    templateUrl: './gamesTable.component.html',
    styleUrls: ['./gamesTable.component.css']
})
export class GamesTableComponent implements OnInit {

    games: Array<GameModel>;

    myDataSource: MatTableDataSource<GameModel>;
    columns: Array<String>;
    selection: SelectionModel<GameModel>;

    constructor() { 

        this.games = new Array<GameModel>();
        this.games.push({
            id:1,
            title:"game0",
            description:"description",
            price : 4,
            rating : 1,
            isWishlisted: true
        });
        this.games.push({
            id:2,
            title:"game1",
            description:"description",
            price : 4,
            rating : 0.4,
            isWishlisted: false,
        });
        this.games.push({
            id:3,
            title:"game2",
            description:"description",
            price : 4,
            rating : 5,
            isWishlisted: true
        });
        this.games.push({
            id:3,
            title:"game3",
            description:"description",
            price : 4,
            rating : 3.4,
            isWishlisted: false,
        });

        
        this.columns = new Array<String>();

        this.columns.push("Selected");
        this.columns.push("Game");
        this.columns.push("Price");

        this.selection = new SelectionModel<GameModel>(true);
        this.myDataSource = new MatTableDataSource<GameModel>();
        this.myDataSource.data = this.games;
    }

    ngOnInit() { }

    deleteGame(game: GameModel): void{

        var gameIndex: number = this.games.indexOf(game);
        this.games.splice(gameIndex, 1);
        this.myDataSource.data = this.games;
    }
} 