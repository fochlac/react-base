import { setter } from 'UTIL/inputSetter.js';
import { expect } from 'chai';

let output,
	testSet = setter({setState: data => {output = data}});


describe('util-inputSetter', () => {
    it('should call setstate on the context, setting the provided property when an event is fired', () => {
    	testSet({field: 'test'})({target: {value: 'test2'}});
        expect(output.test).to.equal('test2');

    	testSet({field: 'test2'})({target: {value: 'test2'}});
        expect(output.test2).to.equal('test2');

    	testSet({field: 'test2', type: 'test2'})({target: {test2: 'test2'}});
        expect(output.test2).to.equal('test2');
    });
});
