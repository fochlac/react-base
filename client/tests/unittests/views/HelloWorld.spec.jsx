import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';
import UserInput from 'COMP/UserInput.jsx';
import DefaultPage from 'COMP/DefaultPage.jsx';
import {HelloWorld} from 'VIEW/HelloWorld.jsx';


describe('HelloWorld', () => {
  	it('should render all elements with user', () => {
	    const wrapper = shallow(<HelloWorld user={{name: 'test'}} />);

	    expect(wrapper.find(DefaultPage), 'Default page not included').to.have.lengthOf(1);
	    expect(wrapper.find(Link), 'Link is not rendered').to.have.lengthOf(1);
	    expect(wrapper.find('p').text(), 'body is not rendered').to.include('test');
	});

  	it('should render all elements without user', () => {
	    const wrapper = shallow(<HelloWorld user={{}} />);

	    expect(wrapper.find(DefaultPage), 'Default page not included').to.have.lengthOf(1);
	    expect(wrapper.find(UserInput), 'UserInput is rendered').to.have.lengthOf(1);
	});
});