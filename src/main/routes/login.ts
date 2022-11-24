import { adaptExpressRoute as adapt } from '@/infra/http'
import { makeFacebookLoginController } from '@/main/factories/controllers'
import { Router } from 'express'

export default (router: Router): void => {
  const controller = makeFacebookLoginController()
  router.post('/login/facebook', adapt(controller))
}
