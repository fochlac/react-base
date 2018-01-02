import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { UserInput } from 'COMP/UserInput.jsx';

describe('UserInput', () => {
  	it('should render all element', () => {
	    const wrapper = shallow(<UserInput user={{}} set_name={() => null} />);

	    expect(wrapper.find('.userInput'), 'enclosing div is not rendered').to.have.lengthOf(1);
	    expect(wrapper.find('.userInput label'), 'label is not rendered').to.have.lengthOf(1);
	    expect(wrapper.find('.userInput button'), 'button is not rendered').to.have.lengthOf(1);
	    expect(wrapper.find('.userInput input'), 'input is not rendered').to.have.lengthOf(1);
	});

  	it('should set user name', () => {
	    const wrapper = shallow(<UserInput user={{name: 'test'}} set_name={() => null} />);

	    expect(wrapper.find('.userInput input').prop('value'), 'input content is not correct').to.equal('test');
	});

  	it('should submit changed user name', () => {
  		let output;
	    const wrapper = shallow(<UserInput user={{name: 'test'}} set_name={data => output = data} />);

	    wrapper.find('.userInput input').simulate('change', {target: {value: 'test123'}});
	    wrapper.find('.userInput button').simulate('click');

	    expect(output, 'action not called with correct input data').to.equal('test123');
	});
});