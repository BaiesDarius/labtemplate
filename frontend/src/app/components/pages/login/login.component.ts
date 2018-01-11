import { Component } from '@angular/core';
import { ApiService } from '../../../service/api.service';
import { LoginModel } from './models/loginModel';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { GameBoxModel } from '../../layout/gameBox/models/gameBoxModel';


@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    constructor(private apiService: ApiService,
                private router: Router,
                private formBuilder: FormBuilder) {
                    this.Form = formBuilder.group({
                        email:['', Validators.compose([Validators.required, Validators.email])],
                        password:['', Validators.compose([Validators.required, Validators.minLength(5)])]
                    })
                }

    Form : FormGroup;

    public SubmitLogin(user:LoginModel): void{   
        this.apiService.post("Login",user).subscribe(result => {
            if(result.success){
                console.log(result)
                this.router.navigate(['/gameShopPage'])
            }
            else
            {
                console.log(result)
            }
        })
    }

    public RedirectToRegister(): void{
        this.router.navigate(['/register'])
    }
}