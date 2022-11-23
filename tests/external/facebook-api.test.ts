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
    const fbUser = await sut.loadUser({ token: 'EAAJl2NhcUVgBAKGCvJRBtJYg3Ei3bY4B7X2mBaG0Rht5yh5XDMcFVgoeiZCjxclilZCx2Dy8btPMF4MINmKXI6INBsmmXLwOQ4sAzSYmEIn0OQobGcPKRXVYvfwTa9qCDZCBGqCZCr9bR3FNFqZAeHl8X7G6fZAgGf4FpWKCsUAIPSafe6uLyHud0OWbE03SAGGbkRUFa92NdY1iMdgqKU' })

    expect(fbUser).toEqual({
      facebookId: '105125092433119',
      email: 'rodrigo_czpzrsd_teste@tfbnw.net',
      name: 'Rodrigo Teste'
    })
  })

  test('Should return undefined if token is invalid', async () => {
    const fbUser = await sut.loadUser({ token: 'invalid' })

    expect(fbUser).toBeUndefined()
  })
})
