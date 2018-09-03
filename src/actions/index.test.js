import * as actions from '../actions';

describe('actions', () => {
  it('should return a type of ADD_FAVORITE, with an id', () => {
    const movie = 2;

    const expected = {
      type: 'ADD_FAVORITE',
      movie
    };

    const result = actions.addFavorite(movie);
    expect(result).toEqual(expected);
  });

    it('should return a type of DELETE_FAVORITE, with an id', () => {
    const movie = 2;

    const expected = {
      type: 'DELETE_FAVORITE',
      movie
    };

    const result = actions.deleteFavorite(movie);
    expect(result).toEqual(expected);
  });


  it('should return a type of POPULATE_MOVIES, with a list of movies', () => {
    const movies = [
      {
        title: 'Aloha',
        overview:
          'A celebrated military contractor returns to the site of his greatest career triumphs and re-connects with a long-ago love while unexpectedly falling for the hard-charging Air Force watchdog assigned to him.',
        release: '2015-05-27',
        image: 'https://image.tmdb.org/t/p/w500/4Q0rnkCsQ9GhdnR66Bqjvav2Q1x.jpg'
      },
      {
        title: 'St. Vincent',
        overview:
          'A young boy whose parents just divorced finds an unlikely friend and mentor in the misanthropic, bawdy, hedonistic, war veteran who lives next door.',
        release: '2014-10-09',
        image: 'https://image.tmdb.org/t/p/w500/w0hzr4eQBk1X4m63fb7sOSt9Bnn.jpg'
      }
    ];

    const expected = {
      type: 'POPULATE_MOVIES',
      movies
    };

    const result = actions.populateMovies(movies);
    expect(result).toEqual(expected);
  });
});
