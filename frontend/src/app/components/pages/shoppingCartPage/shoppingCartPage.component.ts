import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NotificationService } from '../../../service/notificationService';
import { Router } from '@angular/router';

@Component({
    selector: 'shoppingCartPage-name',
    templateUrl: './shoppingCartPage.component.html',
    styleUrls: ['./shoppingCartPage.component.css']
})
export class ShoppingCartPageComponent implements OnInit {

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

    public placeOrder(): void {
        if (this.fieldsAreValid()) {
            this.notificator.onSuccess("Order placed");
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        }
        else {
            this.notificator.onFail("Invalid input informations.");
        }
    }

    private fieldsAreValid(): boolean {
        return (this.address.valid && this.contactName.valid);
    }

    public backToShop(): void {
        this.router.navigate(['/gameShopPage']);
    }

    ngOnInit() { }
}