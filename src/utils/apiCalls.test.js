import { deleteMovieFromDatabase, addMovieToDatabase, getUserFavorites, setUserData } from './apiCalls'
import { mockMurrayData, mockMovie, mockUser, mockFavorites, mockFavoriteResult } from './mockData/mockMurrayData'

describe('apiCalls', () => {
  let response = {"status":"success","message":"2 row was deleted."}
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({json:() => Promise.resolve(response)}))
  })
  describe('deleteMovieFromDatabase', () => {
    it('should call fetch with the correct params', () => {
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

  describe('addMovieToDatabase', () => {
    it ('should call fetch with the correct params', () => {
      const url = 'http://localhost:3000/api/users/favorites/new'
  
      const expected = [
        url,  {
          method: 'POST',
          body: JSON.stringify({
            movie_id: mockMovie.id,
            user_id: mockUser.id,
            title: mockMovie.title,
            poster_path: mockMovie.image,
            release_date: mockMovie.release,
            vote_average: mockMovie.vote_average,
            overview: mockMovie.overview
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        }
      ]
      addMovieToDatabase(mockUser, mockMovie)
      expect(window.fetch).toHaveBeenCalledWith(...expected)

    })
  })

  describe('getUserFavorites', () => {
    it('should return users favorites', async () => {
      const url = `http://localhost:3000/api/users/1/favorites`;
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({json:() => Promise.resolve(mockFavorites)}))
      const result = await getUserFavorites(url)
      expect(result).toEqual(mockFavoriteResult)
    })
  })

  describe('setUserData', () => {
    it('should call fetch with the correct params', () => {
      const url = 'http://localhost:3000/api/users/new'
      const expected = [
        url, {
          method: 'POST',
          body: JSON.stringify({ name:'kurt', password:'jesse', email:'brandon' }),
          headers: {
            'Content-Type': 'application/json'
          }
        }
      ]
      setUserData('kurt', 'brandon', 'jesse')
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