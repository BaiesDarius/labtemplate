import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { NotificationService } from '../../../service/notificationService';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'shopPag',
    templateUrl: './shopPage.component.html',
    styleUrls: ['./shopPage.component.css']
})
export class ShopPageComponent implements OnInit, OnDestroy {

    private subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.route.queryParams.subscribe(params => {

            if (params['showLogIn']) {
                this.notificationService.onSuccess("Log in successful. Welcome");
            }
        });
    }

    ngOnDestroy(): void {

        this.subscription.unsubscribe();
    }

    constructor(public vRef: ViewContainerRef,
        public notificationService: NotificationService,
        private route: ActivatedRoute,) {
        this.notificationService.setViewContainerReference(vRef);

    }
}