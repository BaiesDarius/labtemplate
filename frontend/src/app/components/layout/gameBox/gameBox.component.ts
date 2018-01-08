import { Component, OnInit, Input } from '@angular/core';
import { GameBoxModel } from './models/gameBoxModel';

@Component({
    selector: 'gamebox',
    templateUrl: './gameBox.component.html',
    styleUrls: ['./gameBox.component.css']
})
export class GameBoxComponent{
    
    constructor() { }

    @Input()
    game: GameBoxModel;
}   