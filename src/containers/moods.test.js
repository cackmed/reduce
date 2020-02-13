import React from 'react';
import { shallow } from 'enzyme';
import Moods from './Moods.js';

describe('container', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(<Moods />);
    expect(wrapper).toMatchSnapshot();
  });
});
