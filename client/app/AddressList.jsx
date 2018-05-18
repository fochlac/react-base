import React from 'react';
import { connect } from 'react-redux';
import Address from './Address';
import AddressCard from './AddressCard';

class AddressList extends React.Component {
    render() {
        const{contacts} = this.props
        const arrContacts = Object.values(contacts)
        console.log(arrContacts)
        return(
            <ul className="AddressList">
                {
                    arrContacts.map((contact) => { return (
                        
                            <li><AddressCard contact={contact}/></li>
                         )               
                    })
                }
            </ul>
        )
    }
}

const mapStoreToProps = (store, ownProps) => {
    return {
        contacts: store.contacts
    }
}

export default connect(mapStoreToProps, {})(AddressList)