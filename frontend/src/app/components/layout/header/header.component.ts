import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    constructor(private router: Router) { }

    ngOnInit() { }

    goToShoppingCart(): void{
        
        this.router.navigate(["/shoppingCart"]);
    }

    logOut(): void{

        Cookie.deleteAll();
        this.router.navigate(['/login']);
    }
}