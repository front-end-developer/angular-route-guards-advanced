/**
 * Created by Mark Webley on 18/09/2020.
 */
import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {AccountsDataDetails} from '../../services/accounts/models/accounts-data-details.model';
import {AccountsApiService} from '../../services/accounts/accounts.service';

@Injectable()
export class DashboardAccountsResolver implements Resolve<Observable<AccountsDataDetails[]>> {

  constructor(private accountsService: AccountsApiService) {}

  resolve(): Observable<AccountsDataDetails[]> {
    console.log('Resolve: resolve data before go to the route');
    return this.accountsService.getAccounts({_expand : 'balances'});
  }

}
