import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { ApiService } from '../../../service/api.service';
import { Cookie } from 'ng2-cookies/src/services';
import { GameModel } from '../gameBox/models/gameBoxModel';
import { NotificationService } from '../../../service/notificationService';

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

    constructor(private apiService: ApiService,
    private vcr: ViewContainerRef,
    private notification: NotificationService) {
        this.games = null;
        this.getGames();

        this.notification.setViewContainerReference(this.vcr);
    }

    ngOnInit() {

    }
    getGames(): void {
        var userid = Cookie.get("Id")
        var datasent = {
            iduser: userid
        }

        this.apiService.post("GetCart", datasent).subscribe(result => {
            if (result.success) {
                this.games = new Array<GameModel>();

                this.columns = new Array<String>();

                this.columns.push("Selected");
                this.columns.push("Game");
                this.columns.push("Price");

                this.selection = new SelectionModel<GameModel>(true);
                this.myDataSource = new MatTableDataSource<GameModel>();
                this.myDataSource.data = this.games;
                
                for (var game in result.games) {
                    this.games.push({
                        id: result.games[game].id as number,
                        title: result.games[game].title as string,
                        price: result.games[game].price as number,
                        description: result.games[game].description as string,
                        rating: result.games[game].rating as number
                    });
                }
            }
            else {
                console.log(result);
            }
        })
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
                this.notification.onSuccess(game.title + " deleted from cart");

            }
            else {
                console.log(result);
            }
        })
    }
} 