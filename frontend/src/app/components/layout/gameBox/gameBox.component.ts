import { Component, OnInit, Input, ViewContainerRef } from '@angular/core';
import { GameBoxModel } from './models/gameBoxModel';
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
    game: GameBoxModel;

    addToCart():void {
        console.log("added");
        this.notificator.onSuccess(this.game.title + " added to cart");
    }
}   