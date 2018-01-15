import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';import { ApiService } from '../../../service/api.service';
import { NotificationService } from '../../../service/notificationService';
import { Router } from '@angular/router';
import { Cookie } from 'ng2-cookies/src/services/cookie';
;

@Component({
    selector: 'adminPage',
    templateUrl: './adminPage.component.html',
    styleUrls: ['./adminPage.component.css'],
})
export class AdminPageComponent implements OnInit {

    title: FormControl;
    description: FormControl;
    price: FormControl;
    rating: FormControl;

    image64: string;

    constructor(private apiService : ApiService,
                private notificator: NotificationService,
                private vcr: ViewContainerRef,
                private navigator:Router) {
        this.title = new FormControl('', Validators.compose([Validators.required]));
        this.description = new FormControl('', Validators.compose([Validators.required]));
        this.price = new FormControl('', Validators.compose([Validators.required]));
        this.rating = new FormControl('', Validators.compose([Validators.required, Validators.min(1), Validators.max(5)]));

        this.notificator.setViewContainerReference(this.vcr);
    }


    onFileChange(event) {
        let reader = new FileReader();
        if (event.target.files && event.target.files.length > 0) {
            let file = event.target.files[0];
            reader.readAsDataURL(file);
            reader.onload = () => {
                var infos: Array<string> = reader.result.split(',');
                var base64 = infos.slice(1).join('');
                this.image64 = base64;
            };
        }
    }

    upload() {
        var game = {
            title: this.title.value,
            description: this.description.value,
            price: this.price.value,
            rating: this.rating.value,
            image: this.image64,
        };
        this.apiService.post("AdminCreate",game).subscribe(result => {
            if (result.success) {
                console.log(result);
            }
            else {
                console.log(result);
            }
        })
        this.notificator.onSuccess("Game added successfully.");

    }

    logOut(): void{
        Cookie.deleteAll();
        this.navigator.navigate(['login']);
    }

    ngOnInit() { }
}