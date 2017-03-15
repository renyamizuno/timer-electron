import test from 'ava';
import React from 'react';
import moment from 'moment';
import { shallow } from 'enzyme';

import Timer, { style } from '../';

test('Timer show current time', t => {
  const wrapper = shallow(<Timer />);

  t.is(wrapper.contains(<div className={style.oval}><div className={style.time}>{moment(wrapper.state().date).format('h:mm:ss')}</div></div>), true);
});
