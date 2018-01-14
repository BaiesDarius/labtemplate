import { Component, ViewContainerRef } from '@angular/core';
import { ApiService } from '../../../service/api.service';
import { LoginModel } from './models/loginModel';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { GameModel } from '../../layout/gameBox/models/gameBoxModel';
import { ToastsManager } from 'ng2-toastr';
import { NotificationService } from '../../../service/notificationService';
import { Cookie } from 'ng2-cookies/src/services/cookie';


@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {

    constructor(private apiService: ApiService,
        private router: Router,
        private formBuilder: FormBuilder,
        public notificator: NotificationService,
        public vcr: ViewContainerRef) {

        this.Form = formBuilder.group({
            email: ['', Validators.compose([Validators.required, Validators.email])],
            password: ['', Validators.compose([Validators.required, Validators.minLength(5)])]
        })

        this.notificator.setViewContainerReference(vcr);
    }

    Form: FormGroup;

    public SubmitLogin(user: LoginModel): void {

        this.apiService.post("Login", user).subscribe(result => {
            if (result.success) {
                console.log(result);
                Cookie.set("Id", result.id);
                this.router.navigate(['/gameShopPage'], { queryParams: { showLogIn: true, firstName: result.firstname } });
            }
            else {
                console.log(result);
                this.notificator.onFail('Invalid Creditentials.');
            }
        })
    }

    public RedirectToRegister(): void {
        this.router.navigate(['/register'])
    }
}