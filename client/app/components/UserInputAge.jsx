import React from 'react';
import { connect } from 'react-redux';
import { set_age } from 'STORE/actions.js';
import { Link } from 'react-router-dom';

import { setter } from 'UTIL/inputSetter.js';
import './UserInput.less';

export class UserInputAge extends React.Component {
    constructor(props) {
        super();

        this.state = {
            age: props.user.age ? props.user.age : ''
        }

        this.set = setter(this);
    }

    submit() {
        this.props.set_age(this.state.age);
    }

    render() {
        let id = parseInt(Date.now() * Math.random());

        return (
            <div className="userInput" >
                <label htmlFor={'userAge_' + id} >Alter:</label>
                <input type="text" id={'userAge_' + id} value={this.state.age} onChange={this.set({field: 'age'})} />
                <button onClick={this.submit.bind(this)} >Abschicken</button>
            </div>
        );
    }

};



const mapStateToProps = (state, ownProps) => ({
    user: state.user
});

export default connect(mapStateToProps, { set_age })(UserInputAge);
