import { AccountModel } from 'domain/models/accont-model'
import { AddAccountModel } from 'domain/usecases/add-account'

export interface AddAccountRepository {
  add: (account: AddAccountModel) => Promise<AccountModel>
}
