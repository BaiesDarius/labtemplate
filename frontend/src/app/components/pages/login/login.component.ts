import { Component, ViewContainerRef } from '@angular/core';
import { ApiService } from '../../../service/api.service';
import { LoginModel } from './models/loginModel';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { GameBoxModel } from '../../layout/gameBox/models/gameBoxModel';
import { ToastsManager } from 'ng2-toastr';
import { NotificationService } from '../../../service/notificationService';


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
                        email:['', Validators.compose([Validators.required, Validators.email])],
                        password:['', Validators.compose([Validators.required, Validators.minLength(5)])]
                    })

                    this.notificator.setViewContainerReference(vcr);
                }



    Form : FormGroup;

    public SubmitLogin(user:LoginModel): void{   
        this.apiService.post("Login",user).subscribe(result => {
            if(result.success){
                console.log(result);
                this.router.navigate(['/gameShopPage'],{queryParams:{showLogIn: true}});
            }
            else
            {
                console.log(result);
                this.notificator.onFail('Invalid Creditentials.');
            }
        })
    }

    public RedirectToRegister(): void{
        this.router.navigate(['/register'])
    }
}