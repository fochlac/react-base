import React from 'react';
import { logout } from 'STORE/actions.js';
import { set_address } from 'STORE/actions.js';
import { connect } from 'react-redux';

class Address extends React.Component {
    constructor(props) {
        super();

        this.state = { 
            street: '',
            city: ''
        }
    }

    render() {
        const{street, city} = this.state

        return(
            <div className="address">
                <input type="text" value={street} onChange={(evt) => this.setState({street: evt.target.value})}/> <br/>
                <input type="text" value={city} onChange={(evt) => this.setState({city: evt.target.value})} />
                <button onClick={() => this.props.set_address({street, city})}>Submit</button>
            </div>
        )
    }
}

export default connect(() => {}, {set_address})(Address)