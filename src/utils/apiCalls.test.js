import { deleteMovieFromDatabase } from './apiCalls'
import { mockMurrayData, mockMovie, mockUser } from './mockData/mockMurrayData'

describe('apiCalls', () => {
  let response = {"status":"success","message":"2 row was deleted."}
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({json:() => Promise.resolve(response)}))
  })
  describe('deleteMovieFromDatabase', () => {
    it.only('should call fetch fetch with the correct params', () => {
const url = `http://localhost:3000/api/users/${mockUser.id}/favorites/${mockMovie.id}`
      
      const expected = [
        url, {
          method: 'DELETE',
      body: JSON.stringify({user_id: mockUser.id, movie_id: mockMovie.id}),
      headers: {
        'Content-Type': 'application/json'
      }
        }
      ]
      deleteMovieFromDatabase(mockUser, mockMovie)
      // console.log(result)
      expect(window.fetch).toHaveBeenCalledWith(...expected)

    })
  })
})

// const url = `http://localhost:3000/api/users/${user.id}/favorites/${movie.id}`
//     await fetch(url, {
//       method: 'DELETE',
//       body: JSON.stringify({user_id: user.id, movie_id: movie.id}),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     })