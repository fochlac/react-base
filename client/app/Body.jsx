import React from 'react';
import Address from './Address.jsx';
import { set_address } from 'STORE/actions.js';
import { connect } from 'react-redux';

import 'APP/BaseStyle.less';

class Body extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        const {address, isAddressSet} = this.props
        return(
            <div className="body">
                <h3>Addresse</h3>

                {
                  isAddressSet
                  ? <div> 
                    <p>Deine Straße: {address.street}</p> 
                    <p>Dein Stadt ist: {address.city}</p> 
                    </div> 
                  : <Address />
                  
                }
            </div>
        )
    }
}

const mapStoreToProps = (store, ownProps) => {
    return {
        isAddressSet: store.user.address.street && store.user.address.city,
        address: store.user.address,
    }
}

export default connect(mapStoreToProps, {})(Body)