import { logMiddleware } from 'STORE/middleware/logger.js';
import { expect } from 'chai';

let myAction = {test: 'test'};

describe('logger', () => {
  it('should print each action', () => {
    let output,
    	tmp = console.log;

    console.log = (data) => {
    	output = data;
    }

    logMiddleware({})(action => {
        expect(output).to.deep.equal(myAction);
    	expect(action).to.deep.equal(myAction);
    	console.log = tmp;
    })(myAction);

  });
});