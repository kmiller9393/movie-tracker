import React from 'react';
import createRouterContext from 'react-router-test-context';
import { shallow, mount } from 'enzyme';
import { LoginForm, mapDispatchToProps } from './LoginForm';
import { mockHistory } from '../../utils/mockData/mockMurrayData';
import { fetchUserData } from '../../utils/__mocks__/apiCalls';

describe('LoginForm', () => {
  let event;
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<LoginForm userLogin={jest.fn()} />);
    event = {
      preventDefault: jest.fn(),
      target: {
        value: 'hello',
        name: 'name',
      },
    };
    window.fetch = jest
      .fn()
      .mockImplementation(() => Promise.resolve({ json: () => Promise.resolve({ status: 200 }) }));
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
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
    it('should call fetchUserData and getUserFavorites', async () => {
      const context = createRouterContext();
      wrapper = shallow(
        <LoginForm
          history={mockHistory}
          userLogin={jest.fn()}
          getFavorites={jest.fn()}
        />,
        { context },
      );

      wrapper.state().email = 'tman2272@aol.com';
      wrapper.state().password = 'password';
      await wrapper.instance().handleSubmit(event);

      expect(wrapper.props().userLogin).toHaveBeenCalledWith('');
    });
  });

  describe('mapDispatchToProps', () => {
    it('should call dispatch when userLogin or getFavorites are called from props', () => {
      const mockDispatch = jest.fn();

      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.userLogin();
      mappedProps.getFavorites();
      expect(mockDispatch).toHaveBeenCalledTimes(2);
    });
  });
});
