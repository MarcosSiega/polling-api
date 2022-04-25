import { Encrypter } from 'data/protocols/encrypter'
import bcryptjs from 'bcryptjs'

export class BcryptAdapter implements Encrypter {
  private readonly salt: number

  constructor (salt: number) {
    this.salt = salt
  }

  async encrypt (value: string): Promise<string> {
    await bcryptjs.hash(value, this.salt)
    return ''
  }
}
