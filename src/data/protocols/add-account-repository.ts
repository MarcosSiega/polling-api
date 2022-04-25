import { AccountModel } from 'crosscutting/models/account-model'
import { AddAccountModel } from 'crosscutting/models/add-account-model'

export interface AddAccountRepository {
  add: (account: AddAccountModel) => Promise<AccountModel>
}
