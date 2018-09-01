import { deleteMovieFromDatabase } from './apiCalls'
import { mockMurrayData, mockMovie, mockUser } from './mockData/mockMurrayData'

describe('apiCalls', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({status:200, json:() => Promise.resolve(mockMurrayData)}))
  })
  describe('deleteMovieFromDatabase', () => {
    it.only('should delete a movie from the database', async () => {
      const result = await deleteMovieFromDatabase(mockUser, mockMovie)
      console.log(result)

    })
  })
})