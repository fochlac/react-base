import React from 'react';

export default class InputRow extends React.Component {
	constructor(props) {
        super();

        this.state = { 
            value: props.value || '',
        }
    }

    onChange(evt){
    	this.props.onChange(evt.target.value)
    	this.setState({value: evt.target.value})
    }

	render() {
		const{id, name} = this.props
		return(
			<div>
				<label htmlFor={id}>{name}:</label> <br/>
				<input
				id={id}
				type="text" 
				value={this.state.value} 
				onChange={(evt) => this.onChange(evt)} />

			</div>
		)
		
	}
}