import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { NotificationService } from '../../../service/notificationService';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'shopPage',
    templateUrl: './shopPage.component.html',
    styleUrls: ['./shopPage.component.css']
})
export class ShopPageComponent {

    constructor() {
    }
}