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
            phone: '',
            invalidName: true,
            invalidStreet: true,
            invalidCity: true,
            invalidPhone: true,
        }
    }

    render() {
        const{name, street, city, phone, invalidName, invalidStreet, invalidCity, invalidPhone} = this.state
        const invalid = invalidName || invalidStreet || invalidCity || invalidPhone
        return(
            <div className="address">
                <InputRow value="" regex={/\w+/} name="Name" id="name" onChange={(value, invalidName) => this.setState({name: value, invalidName})} />
                <InputRow value="" regex={/[a-zA-ZäöüÄÖÜ \.]+ [0-9]+[a-zA-Z]?/} name="Straße" id="street" onChange={(value, invalidStreet) => this.setState({street: value, invalidStreet})} />
                <InputRow value="" regex={/^[0-9]{5} \w+/} name="Stadt" id="city" onChange={(value, invalidCity) => this.setState({city: value, invalidCity})}/>
                <InputRow value="" regex={/^[0-9\-\+]{9,15}$/} name="Telefonnummer" id="phone" onChange={(value, invalidPhone) => this.setState({phone: value, invalidPhone})}/> <br/>
                <button disabled={invalid} onClick={() => this.props.set_address(name, {street, city}, phone)}>Submit</button>
            </div>
        )
    }
}

export default connect(() => {}, {set_address})(Address)