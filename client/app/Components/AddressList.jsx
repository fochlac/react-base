import React from "react";
import { connect } from "react-redux";
import AddressCard from "./AddressCard";

function sortfunction(sortby, a, b){
    switch(sortby){
        case 'sortbyName':
            return a.name.localeCompare(b.name)
            
        case 'sortbyDate':
            return +a.id - +b.id

        case 'sortbyZip':
            
                var aZIP = a.address.city.split(" ");
                var bZIP = b.address.city.split(" ");
                console.log(aZIP)
            return +aZIP[0] - +bZIP[0]
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
