/**
 * Created by Mark Webley on 18/09/2020.
 */
import {CanActivate, Route, Router, UrlSegment} from '@angular/router';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class DashboardCanActivateGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    console.log('canActivate guard');
    const ifSomethingNotValid = false;
    if (ifSomethingNotValid) {
      this.router.navigateByUrl('/login');
    }
    return true;
  }

}
