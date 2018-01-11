import { Component } from '@angular/core';
import { ApiService } from '../../../service/api.service';
import { RegisterUserModel } from './models/registerModel';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { GameModel } from '../../layout/gameBox/models/gameBoxModel';

@Component({
    selector: 'register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent {
    constructor(private apiService: ApiService,
        private router: Router,
        private formBuilder: FormBuilder) {
            this.Form = formBuilder.group({
                email:['', Validators.compose([Validators.required, Validators.email])],
                password:['', Validators.compose([Validators.required, Validators.minLength(5)])],
                confirmPassword:['', Validators.compose([Validators.required, Validators.minLength(5)])],
                firstName:['', Validators.compose([Validators.required, Validators.minLength(5)])],
                lastName:['', Validators.compose([Validators.required, Validators.minLength(5)])]
        })
    }
    Form : FormGroup;
    public SubmitRegister(user:RegisterUserModel): void{  
        console.log(user)
        this.apiService.post("register",user).subscribe(result => {
            if(result.success){
                console.log(result)
                this.router.navigate(['/login'])
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