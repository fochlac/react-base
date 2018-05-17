import React from 'react';

export default class Adress extends React.Component {
    constructor(props) {
        super();

        this.state = { 
            street: props.currentStreet || '',
            city: props.currentCity || ''
        }
    }

    render() {
        const{street, city} = this.state

        return(
            <div className="adress">
                <input type="text" value={street} onChange={(evt) => this.setState({street: evt.target.value})}/> <br/>
                <input type="text" value={city} onChange={(evt) => this.setState({city: evt.target.value})} />
                <button onClick={() => this.props.onSubmitAdress(street, city)}>Submit</button>
            </div>
        )
    }
}
