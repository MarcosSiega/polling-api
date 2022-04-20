import { Encrypter } from 'data/protocols/encrypter'
import { AccountModel } from 'domain/models/accont-model'
import { AddAccount, AddAccountModel } from 'domain/usecases/add-account'

export class DbAddAccount implements AddAccount {
  private readonly encrypter: Encrypter
  constructor (encrypter: Encrypter) {
    this.encrypter = encrypter
  }

  async add (account: AddAccountModel): Promise<AccountModel> {
    const newAccount = {
      id: 'id',
      name: 'name',
      email: 'email',
      password: 'valid_password'
    }
    await this.encrypter.encrypt(account.password)
    return await new Promise(resolve => resolve(newAccount))
  }
}
