import { Component } from '@angular/core';
import { ApiService } from '../../../service/api.service';
import { LoginModel } from './models/loginModel';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';


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
        console.log("in");
        console.log(user);
        // this.apiService.post("",user).subscribe(result => {
        //     if(result.success){

        //     }
        // })
    }

    public RedirectToRegister(): void{
        this.router.navigate(['/register'])
    }
}