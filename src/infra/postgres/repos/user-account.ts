import { LoadUserAccountRepository, SaveFacebookAccountRepository } from '@/data/contracts/repos'
import { PgUser } from '@/infra/postgres/entities'

import { getRepository } from 'typeorm'

type LoadParams = LoadUserAccountRepository.Params
type LoadResult = LoadUserAccountRepository.Result
type SaveParams = SaveFacebookAccountRepository.Params
type SaveResult = SaveFacebookAccountRepository.Result

export class PgUserAccountRepository implements LoadUserAccountRepository {
  async load (params: LoadParams): Promise<LoadResult> {
    const pgUserRepo = getRepository(PgUser)
    const pgUser = await pgUserRepo.findOne({ where: { email: params.email } })
    if (pgUser !== undefined && pgUser !== null) {
      return {
        id: pgUser.id.toString(),
        name: pgUser.name ?? undefined
      }
    }
  }

  async saveWithFacebook (params: SaveParams): Promise<SaveResult> {
    const pgUserRepo = getRepository(PgUser)
    let id: string
    if (params.id === undefined) {
      const pgUser = await pgUserRepo.save({
        email: params.email,
        name: params.name,
        facebookId: params.facebookId
      })
      id = pgUser.id.toString()
    } else {
      id = params.id
      await pgUserRepo.update({
        id: parseInt(params.id)
      }, {
        name: params.name,
        facebookId: params.facebookId
      })
    }
    return { id }
  }
}
