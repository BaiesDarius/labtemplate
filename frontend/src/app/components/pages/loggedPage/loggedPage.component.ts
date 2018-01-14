import { Component, OnInit, ViewContainerRef, transition } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from '../../../service/notificationService';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Input } from '@angular/core/src/metadata/directives';

@Component({
    selector: 'loggedPage',
    templateUrl: './loggedPage.component.html',
    styleUrls: ['./loggedPage.component.css']
})
export class LoggedPageComponent implements OnInit, OnDestroy{

    public isAdmin: boolean;

    private subscription: Subscription;
    private canShowMessage: boolean = true;

    ngOnInit(): void{

        this.subscription = this.route.queryParams.subscribe(params => {

            if (params['showLogIn']) {
                if(this.canShowMessage){
                    this.notificationService.onSuccess("Welcome, " + params['firstName'] + " !");
                }
                this.canShowMessage = false;
            }

            if(params['isAdmin']){
                this.isAdmin = true;
            }
        });
    }

    ngOnDestroy(): void {
        
        this.subscription.unsubscribe();
    }

    constructor(private route: ActivatedRoute,
        public vRef: ViewContainerRef,
        public notificationService: NotificationService) {

        this.notificationService.setViewContainerReference(this.vRef);
     }

}