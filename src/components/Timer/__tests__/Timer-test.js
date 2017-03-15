import test from 'ava';
import sinon from 'sinon';

import React from 'react';
import moment from 'moment';
import { shallow, mount } from 'enzyme';

import Timer, { style } from '../';

test('Timer show current time', t => {
  const wrapper = shallow(<Timer />);

  t.is(wrapper.contains(<div className={style.oval}><div className={style.time}>{moment(wrapper.state().date).format('h:mm:ss')}</div></div>), true);
});

test('Timer update time', t => {
  const clock = sinon.useFakeTimers();
  const wrapper = mount(<Timer />);
  const prevTime = wrapper.state('date');

  clock.tick(1000);

  const currentTime = wrapper.state('date');

  t.not(prevTime, currentTime);
});
