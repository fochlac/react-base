import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { setter } from 'UTIL/inputSetter.js';
import './UserInput.less';

export class Input extends React.Component {
    constructor(props) {
        super();

        this.state = {
            [props.type]: props.user[props.type] ? props.user[props.type] : ''
        }

        this.set = setter(this);
    }

    // submit() {
    //     this.props.set_name(this.state.name);
    // }

    handleChange(event) {
        console.log('handleChange: ', event);
        this.setState({
            [this.props.type]: event.target.value
        })

        this.props.onChange({[this.props.type]: event.target.value});
    }

    render() {
        let id = parseInt(Date.now() * Math.random());

        return (
            <div className="userInput" >
                <label htmlFor={'user_' + this.props.type + '_' + id} >{this.props.type}:</label>
                <input type="text" id={'user_' + this.props.type + '_' + id} value={this.state[this.props.type]} onChange={this.handleChange.bind(this)} />
            </div>
        );
    }

};



const mapStateToProps = (store, ownProps) => ({
    onChange: ownProps.onChange,
    type: ownProps.data,
    user: store.user
});

export default connect(mapStateToProps, {})(Input);
