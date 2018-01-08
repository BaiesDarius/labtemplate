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
                    this.game.description= "The game is a MMORPG and other words will be added here.",
                    this.game.price = 15.4;
                    this.game.title = "World of Warcraft";
                    this.game.rating = 4.5;
                }

    Form : FormGroup;

    game:GameBoxModel = new GameBoxModel();

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