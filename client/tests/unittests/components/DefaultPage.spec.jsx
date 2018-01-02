import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import DefaultPage from 'COMP/DefaultPage.jsx';

describe('DefaultPage', () => {
  	it('should render all elements', () => {
	    const wrapper = shallow(<DefaultPage><div className="test123"></div></DefaultPage>);

	    expect(wrapper.find('.header'), 'head is not rendered').to.have.lengthOf(1);
	    expect(wrapper.find('.header h3'), 'title is not rendered').to.have.lengthOf(1);
	    expect(wrapper.find('.body'), 'body is not rendered').to.have.lengthOf(1);
	    expect(wrapper.find('.body .test123'), 'children of DefaultPage are not rendered').to.have.lengthOf(1);
	});
});