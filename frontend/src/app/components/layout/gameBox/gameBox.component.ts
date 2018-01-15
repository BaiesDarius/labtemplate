import { Component, OnInit, Input, ViewContainerRef } from '@angular/core';
import { GameModel } from './models/gameBoxModel';
import { NotificationService } from '../../../service/notificationService';
import { ApiService } from '../../../service/api.service';
import { Cookie } from 'ng2-cookies/src/services';

@Component({
    selector: 'gamebox',
    templateUrl: './gameBox.component.html',
    styleUrls: ['./gameBox.component.css']
})
export class GameBoxComponent{
    
    constructor(public notificator: NotificationService, 
        public vcr: ViewContainerRef,private apiService: ApiService) { 
            this.notificator.setViewContainerReference(vcr);
        }

    @Input()
    game: GameModel;

    addToCart():void {
        var userid = Cookie.get("Id")
        var datasent = {
            iduser: userid,
            idgame: this.game.id
        }
        this.apiService.post("cartAdd",datasent).subscribe(result => {
            if (result.success) {
                console.log(result);
            }
            else {
                console.log(result);
            }
        })
        this.notificator.onSuccess(this.game.title + " added to cart");
    }
}   