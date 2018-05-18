import React from "react";
import { connect } from "react-redux";
import Address from "./Address";
import AddressCard from "./AddressCard";

function sortfunction(sortby, a, b){
    switch(sortby){
        case 'sortbyName':
            a.name.localeCompare(b.name)
            break
        case 'sortbyDate':
            +a.id - +b.id
            break
        case 'sortbyZip':

            break
    }
}

class AddressList extends React.Component {
    render() {
        const{contacts} = this.props
        const{filter, sort} = this.props.app
        const arrContacts = Object.values(contacts)
        console.log(arrContacts)
        return(
            <ul className="AddressList">
                {
                    arrContacts.filter((contact) => { 
                        return contact.name.includes(filter)
                    }).sort((a, b) => {
                        return sortfunction(sort, a, b)
                    }).map( contact => {
                     return   <li key={contact.id}><AddressCard contact={contact}/></li>
                    })
                                        
                }
            </ul>
        )
    }
}

const mapStoreToProps = (store, ownProps) => {
    return {
        contacts: store.contacts,
        app: store.app
    }
}

export default connect(mapStoreToProps, {})(AddressList);
