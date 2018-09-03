import React from 'react';
import createRouterContext from 'react-router-test-context';
import { SignUp } from './SignUp';
import { shallow, mount } from 'enzyme';
import { mockHistory } from '../utils/mockData/mockMurrayData';
import { setUserData } from '../utils/__mocks__/apiCalls';

describe('SignUp', () => {
  let wrapper;
  let event;
  beforeEach(() => {
    wrapper = shallow(<SignUp history={mockHistory} />);
    event = {
      preventDefault: jest.fn(),
      target: {
        value: 'hello',
        name: 'name'
      }
    };
    window.fetch = jest
      .fn()
      .mockImplementation(() =>
        Promise.resolve({ json: () => Promise.resolve({ status: 200 }) })
      );
  });

  describe('handleChange', () => {
    it('should change the state of the sign up of component when something is entered in the input field', () => {
      wrapper
        .find('input')
        .first()
        .simulate('change', event);
      expect(wrapper.state('name')).toEqual('hello');
    });
  });

  describe('handleSubmit', () => {
    it('should call setUserData', async () => {
      const context = createRouterContext();
      wrapper = shallow(<SignUp history={mockHistory} />, { context });
      wrapper.state().name = 'dude';
      wrapper.state().email = 'yam@aol.com';
      wrapper.state().password = 'juice';
      console.log(wrapper.state());

      await wrapper.instance().handleSubmit(event);

      expect(setUserData).toHaveBeenCalledWith(wrapper.state());
    });
  });
});
