import { ServerError } from '../erros'
import { HttpResponse } from '../protocols'

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error
})

export const ok = (message: any): HttpResponse => ({
  statusCode: 200,
  body: message
})

export const serverError = (): HttpResponse => ({
  statusCode: 500,
  body: new ServerError()
})
