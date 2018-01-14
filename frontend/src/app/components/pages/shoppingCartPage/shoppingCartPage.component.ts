import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NotificationService } from '../../../service/notificationService';
import { Router } from '@angular/router';
import { Cookie } from 'ng2-cookies/src/services/cookie';

@Component({
    selector: 'shoppingCartPage-name',
    templateUrl: './shoppingCartPage.component.html',
    styleUrls: ['./shoppingCartPage.component.css']
})
export class ShoppingCartPageComponent {

    constructor(private formBuilder: FormBuilder,
        private notificator: NotificationService,
        public vcr: ViewContainerRef,
        private router: Router) {

        this.address = new FormControl('', Validators.compose([Validators.required]));
        this.contactName = new FormControl('', Validators.compose([Validators.required]));

        this.notificator.setViewContainerReference(vcr);
    }

    address: FormControl;
    contactName: FormControl;

    private fieldsAreValid(): boolean {
        return (this.address.valid && this.contactName.valid);
    }

    public backToShop(): void {
        this.router.navigate(['/logged']);
    }

    public logOut(): void {
        Cookie.deleteAll();
        this.router.navigate(['/login']);
    }

    placeOrder(): void {

        if (this.fieldsAreValid()) {

            this.notificator.onSuccess("Order placed");
            setTimeout(() => {
                this.backToShop();
            }, 1000);
        }
        else {
            this.notificator.onFail("Invalid input informations.");
            return;
        }
    }
}