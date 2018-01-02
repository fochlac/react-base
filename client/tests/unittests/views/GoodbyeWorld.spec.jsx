import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';
import DefaultPage from 'COMP/DefaultPage.jsx';
import {GoodbyeWorld} from 'VIEW/GoodbyeWorld.jsx';


describe('GoodbyeWorld', () => {
  	it('should render all elements with user', () => {
	    const wrapper = shallow(<GoodbyeWorld user={{name: 'test'}} />);

	    expect(wrapper.find(DefaultPage), 'Default page not included').to.have.lengthOf(1);
	    expect(wrapper.find(Link), 'Link is not rendered').to.have.lengthOf(1);
	    expect(wrapper.find('p').text(), 'body is not rendered').to.include('test');
	});

  	it('should render all elements without user', () => {
	    const wrapper = shallow(<GoodbyeWorld user={{}} />);

	    expect(wrapper.find(DefaultPage), 'Default page not included').to.have.lengthOf(1);
	    expect(wrapper.find(Link), 'Link is rendered').to.have.lengthOf(0);
	});

  	it('should render all elements with user', () => {
  		let called;
	    const wrapper = shallow(<GoodbyeWorld user={{name: 'test'}} delete_name={() => called = true} />);

	    wrapper.find(Link).simulate('click');

	    expect(called, 'delete_name was called on click').to.be.true;
	});
});