import { MovieContainer, mapStateToProps } from './MovieContainer';

describe('MovieContainer', () => {
  describe('MovieContainer component', () => {});

  describe('mapStateToProps', () => {
    it('should return an object with a movies array', () => {
      const movies = {
        title: 'Aloha',
        overview:
          'A celebrated military contractor returns to the site of his greatest career triumphs and re-connects with a long-ago love while unexpectedly falling for the hard-charging Air Force watchdog assigned to him.',
        release: '2015-05-27',
        image: 'https://image.tmdb.org/t/p/w500/4Q0rnkCsQ9GhdnR66Bqjvav2Q1x.jpg'
      };
      const id = 1;
      const mockState = {
        movies: [movies, id],
        filter: 'SHOW_ALL'
      };

      const expected = {
        movies: [movies, id]
      };

      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected);
    });
  });
});
