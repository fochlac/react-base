import React from 'react';
import { connect } from 'react-redux';
import { set_name } from 'STORE/actions.js';
import { Link } from 'react-router-dom';

import { setter } from 'UTIL/inputSetter.js';
import './UserInput.less';

export class UserInput extends React.Component {
    constructor(props) {
        super();

        this.state = {
            name: props.user.name ? props.user.name : ''
        }

        this.set = setter(this);
    }

    shouldComponentRender(nextProps, nextState) {
        if (this.state !== nextState) {
            return true;
        }
        return false;
    }

    submit() {
        this.props.set_name(this.state.name);
    }

    render() {
        let id = parseInt(Date.now() * Math.random());

        return (
            <div className="userInput" >
                <label htmlFor={'userName_' + id} >Name:</label>
                <input type="text" id={'userName_' + id} value={this.state.name} onChange={this.set({field: 'name'})} />
                <button onClick={this.submit.bind(this)} >Abschicken</button>
            </div>
        );
    }

};



const mapStateToProps = (state, ownProps) => ({
    user: state.user,
    ...ownProps

});

export default connect(mapStateToProps, { set_name })(UserInput);