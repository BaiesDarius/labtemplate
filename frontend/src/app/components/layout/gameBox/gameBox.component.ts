import { Component, OnInit, Input, ViewContainerRef } from '@angular/core';
import { GameModel } from './models/gameBoxModel';
import { NotificationService } from '../../../service/notificationService';

@Component({
    selector: 'gamebox',
    templateUrl: './gameBox.component.html',
    styleUrls: ['./gameBox.component.css']
})
export class GameBoxComponent{
    
    constructor(public notificator: NotificationService, 
        public vcr: ViewContainerRef) { 
            this.notificator.setViewContainerReference(vcr);
        }

    @Input()
    game: GameModel;

    image = 'data:image/png;base64,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'; 

    addToCart():void {
        console.log("added");
        this.notificator.onSuccess(this.game.title + " added to cart");
    }

    toggleWishlist(): void{

        this.game.isWishlisted = !this.game.isWishlisted;


        if(this.game.isWishlisted){
            this.notificator.onSuccess(this.game.title + " was added to wishlist.")
        }
        else{
            this.notificator.onSuccess(this.game.title + " was removed from the wishlist.")
        }

        console.log(this.game);
    }
}   