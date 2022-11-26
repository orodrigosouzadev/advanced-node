import { FacebookApi } from '@/infra/apis'
import { AxiosHttpClient } from '@/infra/http'
import { env } from '@/main/config/env'

describe('FacebookApi Integration Tests', () => {
  let axiosClient: AxiosHttpClient
  let sut: FacebookApi

  beforeEach(() => {
    axiosClient = new AxiosHttpClient()
    sut = new FacebookApi(axiosClient, env.facebookApi.clientId, env.facebookApi.clientSecret)
  })

  test('Should return a Facebook User if token is valid', async () => {
    const token = env.facebookApi.accessToken

    const fbUser = await sut.loadUser({ token })

    expect(fbUser).toEqual({
      facebookId: '105125092433119',
      email: 'rodrigo_askpxdu_dev@tfbnw.net',
      name: 'Rodrigo Dev'
    })
  })

  test('Should return undefined if token is invalid', async () => {
    const fbUser = await sut.loadUser({ token: 'invalid' })

    expect(fbUser).toBeUndefined()
  })
})
