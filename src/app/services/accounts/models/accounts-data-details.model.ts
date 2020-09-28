import { AccountsDataDetailsLinks } from './accounts-data-details-links.model';
import { Money } from './money.model';

export interface AccountsDataDetails {
    _links: AccountsDataDetailsLinks;
    accountId: string;
    alias: string;
    availableBalance: Money;
    description: string;
    displayNumber: string;
    mainBalance: Money;
    overdraftLimit: Money;
    pendingBalance: Money;
    status: string;
    type: string;
    withholdingBalance: Money;
}
