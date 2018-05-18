import React from 'react';
import Address from './Address.jsx';
import { set_address } from 'STORE/actions.js';
import { connect } from 'react-redux';
import { addAddress } from 'STORE/actions.js'

import 'APP/BaseStyle.less';

class Body extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        return(
            <div className="body">
               {

                this.props.app.addingAddress ? <Address />:  <button onClick={this.props.addAddress} >Adresse hinzufügen</button>
               }
            </div>
        )
    }
}

const mapStoreToProps = (store, ownProps) => {
    return {
        app: store.app
    }
}

export default connect(mapStoreToProps, {addAddress})(Body)