import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Injectable } from "@angular/core";
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { isNumber } from "util";


@Injectable()
export class RoutingProtection implements CanActivate{

    constructor(private router: Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {

        var id = Cookie.get("Id");
        var canNavigate = isNumber(id);

        if(!canNavigate)
            this.router.navigate(['/login']);
        
        return canNavigate;
    }
}