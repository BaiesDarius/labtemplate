import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'adminPage',
    templateUrl: './adminPage.component.html',
    styleUrls: ['./adminPage.component.css'],
})
export class AdminPageComponent implements OnInit {

    title: FormControl;
    description: FormControl;
    price: FormControl;

    image64: string;

    constructor() {
        this.title = new FormControl('', Validators.compose([Validators.required]));
        this.description = new FormControl('', Validators.compose([Validators.required]));
        this.price = new FormControl('', Validators.compose([Validators.required]));
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
            image: this.image64,
        };
      }

    ngOnInit() { }
}