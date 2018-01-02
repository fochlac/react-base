import user from 'STORE/reducers/user.js';
import { expect } from 'chai';


let myAction = {name: 'test', type: 'SET_NAME'};

describe('user-reducer', () => {
    it('should trigger SET_NAME transformation', () => {
        expect(user({}, myAction).name).to.equal(myAction.name);
        expect(user({test: 'test'}, myAction).name).to.equal(myAction.name);
        expect(user({test: 'test', name: 'asdawdq'}, myAction).name).to.equal(myAction.name);
        expect(user({test: 'test'}, myAction).test).to.equal('test');
    });
});