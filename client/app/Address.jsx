import React from 'react';
import { set_address } from 'STORE/actions.js';
import { connect } from 'react-redux';
import InputRow from './Components/InputRow.jsx';

class Address extends React.Component {
    constructor(props) {
        super();

        this.state = { 
            name: '',
            street: '',
            city: '',
            phone: ''
        }
    }

    render() {
        const{name, street, city, phone} = this.state

        return(
            <div className="address">
                <InputRow value="" regex={/\w+/} name="Name" id="name" onChange={(value) => this.setState({name: value})} />
                <InputRow value="" regex={/[a-zA-ZäöüÄÖÜ \.]+ [0-9]+[a-zA-Z]?/} name="Straße" id="street" onChange={(value) => this.setState({street: value})} />
                <InputRow value="" regex={/^[0-9]{5} \w+/} name="Stadt" id="city" onChange={(value) => this.setState({city: value})}/>
                <InputRow value="" regex={/^[0-9\-\+]{9,15}$/} name="Telefonnummer" id="phone" onChange={(value) => this.setState({phone: value})}/> <br/>
                <button onClick={() => this.props.set_address(name, {street, city}, phone)}>Submit</button>
            </div>
        )
    }
}

export default connect(() => {}, {set_address})(Address)