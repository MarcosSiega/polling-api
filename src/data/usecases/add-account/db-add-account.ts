import { AddAccountRepository } from 'data/protocols/add-account-repository'
import { Encrypter, AccountModel, AddAccount, AddAccountModel } from './db-add-account-protocols'

export class DbAddAccount implements AddAccount {
  private readonly encrypter: Encrypter
  private readonly addAccountRepository: AddAccountRepository
  constructor (encrypter: Encrypter, addAccountRepository: AddAccountRepository) {
    this.encrypter = encrypter
    this.addAccountRepository = addAccountRepository
  }

  async add (account: AddAccountModel): Promise<AccountModel> {
    const newAccount = {
      id: 'valid_id',
      name: account.name,
      email: account.email,
      password: 'valid_password'
    }
    const encryptedString = await this.encrypter.encrypt(account.password)
    newAccount.password = encryptedString
    await this.addAccountRepository.add(newAccount)
    return await new Promise(resolve => resolve(newAccount))
  }
}
