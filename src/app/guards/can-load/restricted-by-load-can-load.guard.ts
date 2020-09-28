/**
 * Created by Mark Webley on 18/09/2020.
 */
import {CanLoad, Route, Router, UrlSegment} from '@angular/router';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class RestrictedByLoadCanLoadGuard implements CanLoad {
  constructor(private router: Router) {}
  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    console.log('canLoad guard');
    const ifSomethingNotValid = false;
    if (ifSomethingNotValid) {
      this.router.navigateByUrl('/login');
    }
    return true;
  }

}
