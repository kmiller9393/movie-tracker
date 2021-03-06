import React from 'react';
import { shallow } from 'enzyme';
import { App, mapDispatchToProps } from './App';
import { cleanMurrayData } from '../../utils/__mocks__/helper';
import { fetchMurrayMovies } from '../../utils/__mocks__/apiCalls';

describe.skip('App', () => {
  let wrapper;
  beforeEach(async () => {
    wrapper = await shallow(<App getMovies={jest.fn()} />);
    window.fetch = jest
      .fn()
      .mockImplementation(() =>
        Promise.resolve({ json: () => Promise.resolve(fetchMurrayMovies) })
      );
  });

  it('should call getMovies from props with the correct params', async () => {
    await wrapper.instance().fetchMurrayData();
    expect(cleanMurrayData).toHaveBeenCalledWith('');
  });

  describe('mapDispatchToPros', () => {
    it('should call dispatch when getMovies from props is invoked', () => {
      const mockDispatch = jest.fn();

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.getMovies();
      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
