import React from 'react';
import { connect } from 'react-redux';
import { set_data } from 'STORE/actions.js';
import { Link } from 'react-router-dom';

import './UserInput.less';

export class Button extends React.Component {
    constructor(props) {
        super();

        this.state = {
        }
    }

    submit() {
        this.props.set_data(this.props.data);
    }

    render() {
        // let id = parseInt(Date.now() * Math.random());

        return (
            <div className="userInput" >
                <button onClick={this.submit.bind(this)} >Abschicken</button>
            </div>
        );
    }

};



const mapStateToProps = (state, ownProps) => ({
    data: ownProps.data
});

export default connect(mapStateToProps, { set_data })(Button);