import { setupFacebookAuthentication, FacebookAuthentication } from '@/domain/services'
import { makeFacebookApi } from '@/main/factories/apis'
import { makeJwtTokenGenerator } from '@/main/factories/crypto'
import { makePgUserAccountRepo } from '@/main/factories/repos'

export const makeFacebookAuthenticationService = (): FacebookAuthentication => {
  return setupFacebookAuthentication(
    makeFacebookApi(),
    makePgUserAccountRepo(),
    makeJwtTokenGenerator()
  )
}
