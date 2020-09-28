import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of  } from 'rxjs';
import { map} from 'rxjs/operators';

/*
import {
  EnvironmentConfigModel,
  ENV_CONFIG
} from '@globile/mobile-services';
*/
import {
  // AccountsListResponse,
  AccountsDataDetails,
 // TransactionsListResponse
} from './models/index';


@Injectable({
  providedIn: 'root',
})
export class AccountsApiService {

  constructor(
   //  @Inject(ENV_CONFIG) private environment: EnvironmentConfigModel,
    private http: HttpClient,
  ) {

  }


  /**
   * @description Returns a list of accounts
   *
   * @returns Observable<AccountsDataList[]>
   * @memberOf AccountsService
   */
  getAccounts(params?: { _expand?: 'balances', _limit?: string, _offset?: string}): Observable<AccountsDataDetails[]> {
    return of(true);
    /*return  this.http.get<any>(`${this.environment.api.AccountDetails['urlAccounts']}/me/accounts`, { params })
    .pipe(
      map<any, AccountsDataDetails[]>((resp) => resp.accountsDataList)
    );
    */
  }


  /**
   * @description Returns a list of transcations of a specific account
   *
   * @Param {string} accountId
   * @Param {({_limit?: string, _offset?: string, _sort?: '+date' | '-date',
   *     from_amount?: string, from_date?: string, to_amount?: string, to_date?: string,
   *     transaction_type?: 'credit' | 'debit' | 'pending'})} [params]
   * @Returns {Observable<TransactionsListResponse>}
   * @memberOf AccountsApiService
   */
  getAccountTransactions(accountId: string, params?: {_limit?: string, _offset?: string, _sort?: '+date' | '-date',
    from_amount?: string, from_date?: string, to_amount?: string, to_date?: string,
    transaction_type?: 'credit' | 'debit' | 'pending'}): Observable<any> {
    return of(true);
    /*
    return this.http.get<any>(
      `${this.environment.api.AccountDetails['urlAccounts']}/me/accounts/${accountId}/transactions`,
       { params }
    );
    */
  }


    /**
     * @description Passing the value of the _next path it will call the next transaciotns list
     *
     * @readOnly
     * @memberOf AccountsService
     */
  getNextTransactions(next: string) {
    return of(true);
    // return this.http.get<TransactionsListResponse>(`${this.environment.api.AccountDetails['urlAccounts']}${next}`);
  }
}
