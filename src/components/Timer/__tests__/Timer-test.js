import test from 'ava';
import React from 'react';
import moment from 'moment';
import { shallow } from 'enzyme';

import Timer from '../';

test('Timer show current time', t => {
  const wrapper = shallow(<Timer />);

  t.is(wrapper.contains(moment(wrapper.state().state).format('h:mm:ss')), true);
});
