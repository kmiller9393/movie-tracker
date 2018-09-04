import {
  MovieContainer,
  mapStateToProps,
  mapDispatchToProps
} from './MovieContainer';
import { mockMurrayData, mockUser } from '../../utils/mockData/mockMurrayData';
import React from 'react';
import { shallow, mount } from 'enzyme';

describe('MovieContainer', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <MovieContainer movies={mockMurrayData} user={mockUser} />
    );
  });

  describe('MovieContainer component', () => {});
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot;
  });

  it('should match the snapshot if user is not signed in', () => {
    wrapper = shallow(
      <MovieContainer movies={mockMurrayData} favorites={[]} user={{}} />
    );
    expect(wrapper).toMatchSnapshot();
  });

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

  describe('mapDispatchToProps', () => {
    it('should call dispatch when logout user is invoked from props', () => {
      const mockDispatch = jest.fn();

      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.logoutUser();
      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
