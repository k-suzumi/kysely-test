import * as PersonRepository from './PersonRepository.js'
import { it, describe } from 'vitest'

describe('RecommendationHistoryRepository', () => {
  it('findOneById', async () => {
    await PersonRepository.findOneById(1)
  })
  it('search', async () => {
    await PersonRepository.search({ id: 1})
  })
})