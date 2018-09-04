import React from 'react';
import { shallow, mount } from 'enzyme';
import {
  mockHistory,
  mockMovie,
  mockUser,
  mockFavorites,
  mockStateResult
} from '../../utils/mockData/mockMurrayData';
import { Card, mapStateToProps, mapDispatchToProps } from './Card';

describe('Card', () => {
  let wrapper;
  let user;
  beforeEach(() => {
    user = { name: 'Kurt', password: 'Kurt' };
    wrapper = shallow(
      <Card
        movie={mockMovie}
        image={mockMovie.image}
        favorites={[]}
        user={user}
        addMovie={jest.fn()}
        deleteMovie={jest.fn()}
      />
    );
    window.fetch = jest
      .fn()
      .mockImplementation(() =>
        Promise.resolve({ json: () => Promise.resolve({ status: 200 }) })
      );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should change state of toggle when the image is clicked', () => {
    wrapper.find('img').simulate('click');
    expect(wrapper.state().toggle).toEqual(true);
    wrapper.find('img').simulate('click');
    expect(wrapper.state().toggle).toEqual(false);
  });

  it('should change the state of toggle when the article is clicked', () => {
    wrapper.find('article').simulate('click');
    expect(wrapper.state().toggle).toEqual(true);
    wrapper.find('article').simulate('click');
    expect(wrapper.state().toggle).toEqual(false);
  });

  it('should call addFavoriteData when clicked', () => {
    wrapper = mount(
      <Card
        movie={mockMovie}
        image={mockMovie.image}
        favorites={[]}
        user={user}
        addMovie={jest.fn()}
        deleteMovie={jest.fn()}
      />
    );

    wrapper.find('[className="add-button"]').simulate('click');
    expect(wrapper.props().addMovie).toHaveBeenCalledWith(mockMovie);
  });

  it('should call deleteFavoriteData when clicked', () => {
    wrapper = mount(
      <Card
        movie={mockMovie}
        image={mockMovie.image}
        favorites={[mockMovie.movie_id]}
        user={user}
        addMovie={jest.fn()}
        deleteMovie={jest.fn()}
      />
    );

    wrapper.find('[className="delete-button"]').simulate('click');
    expect(wrapper.props().deleteMovie).toHaveBeenCalledWith(mockMovie);
  });

  it('should throw and error when there is no user logged in', async () => {
    wrapper = mount(
      <Card
        movie={mockMovie}
        image={mockMovie.image}
        favorites={[]}
        history={mockHistory}
        user={{ name: undefined }}
        handleToggle={jest.fn()}
      />
    );

    const expected = alert('You must log-in to favorite a movie!');
    const result = await wrapper.instance().addFavoriteData(mockMovie);

    expect(result).toEqual(expected);
  });

  describe('mapStateToProps', () => {
    it('should return an object with movies, favorites and a user', () => {
      const movies = [mockMovie];
      const favorites = [mockFavorites];
      const user = mockUser;

      const mockState = {
        movies,
        favorites,
        user
      };

      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(mockStateResult);
    });
  });

  describe('mapDispatchToProps', () => {
    it('should call dispatch when using addMovie from mapDispatchToProps', () => {
      const mockDispatch = jest.fn();

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.addMovie(mockMovie);
      expect(mockDispatch).toHaveBeenCalled();
    });

    it('should call dispatch when using deleteMovie from mapDispatchToProps', () => {
      const mockDispatch = jest.fn();
      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.deleteMovie(mockMovie);
      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
