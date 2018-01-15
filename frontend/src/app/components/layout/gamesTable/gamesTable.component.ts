import { Component, OnInit } from '@angular/core';
import { GameModel } from '../../layout/gameBox/models/gameBoxModel';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { ApiService } from '../../../service/api.service';
import { Cookie } from 'ng2-cookies/src/services';

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

    constructor(private apiService: ApiService) {
        this.games = new Array<GameModel>();
        this.games = this.getGames();
        this.games.push({
            id:0,
            title:"",
            price:0,
            rating:0,
            description:""
        })
        
        
        this.columns = new Array<String>();

        this.columns.push("Selected");
        this.columns.push("Game");
        this.columns.push("Price");

        this.selection = new SelectionModel<GameModel>(true);
        this.myDataSource = new MatTableDataSource<GameModel>();
        this.myDataSource.data = this.games;


        console.log(this.games)
        
        

    }

    ngOnInit() {

    }
    getGames() : Array<GameModel>
    {
        var userid = Cookie.get("Id")
        var datasent = {
            iduser: userid
        }
        var list = new Array<GameModel>()
        this.apiService.post("GetCart",datasent).subscribe(result => {
            if (result.success) {
                for(var game in result.games)
                {
                    if(result.games.hasOwnProperty(game))
                    {
                        list.push({
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
        return list
    }

    deleteGame(game: GameModel): void {

        var gameIndex: number = this.games.indexOf(game);
        this.games.splice(gameIndex, 1);
        this.myDataSource.data = this.games;
        var userid = Cookie.get("Id")
        var datasent = {
            iduser: userid,
            idgame: game.id
        }
        this.apiService.post("DeleteCart", datasent).subscribe(result => {
            if (result.success) {
                console.log(result);

            }
            else {
                console.log(result);
            }
        })
    }
} 