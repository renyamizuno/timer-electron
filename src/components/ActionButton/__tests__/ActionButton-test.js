import test from 'ava';
import sinon from 'sinon';

import React from 'react';
import { shallow, mount } from 'enzyme';

import ActionButton from '../';

test('ActionButton render', t => {
  const wrapper = shallow(<ActionButton />);

  t.is(wrapper.contains('▶'), true);
});

test('ActionButton click', t => {
  const spy = sinon.spy();
  const wrapper = mount(<ActionButton onClick={spy} />);

  wrapper.simulate('click');

  t.true(spy.calledOnce);
  t.notDeepEqual(wrapper.state('repples'), []);
});
