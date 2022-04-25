import { AddAccountModel } from 'crosscutting/models/add-account-model'
import { AccountModel } from 'crosscutting/models/account-model'
export interface AddAccount {
  add: (account: AddAccountModel) => Promise<AccountModel>
}
