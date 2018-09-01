import React from 'react';
import { shallow } from 'enzyme';
import { mockMurrayData, mockMovie, mockUser } from '../utils/mockData/mockMurrayData'

import { Card } from './Card';

describe('Card', () => {
  
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Card movie={mockMovie} image={mockMovie.image}/>)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})