import React from 'react';

export default class InputRow extends React.Component {
	constructor(props) {
        super();

        this.state = { 
            value: props.value || '',
            inValid: false,
            dirty: false
        }
    }

    onChange(evt){
    	this.setState({value: evt.target.value, inValid: !this.props.regex.test(evt.target.value)})
    	this.props.onChange(evt.target.value)
    }

    onBlur(evt){
    	if(!this.state.dirty && evt.target.value === ""){
    		this.setState({dirty: true, inValid: true})
    	}else if (!this.state.dirty){
    		this.setState({dirty: true})
    	}
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
				onChange={(evt) => this.onChange(evt)} 
				onBlur={(evt) => this.onBlur(evt)}/>
				{
					this.state.dirty && this.state.inValid && <div><span>Bitte ausfüllen!</span></div>
				}
			</div>
			
		)
		
	}
}