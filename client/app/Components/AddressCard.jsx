import React from 'react';
import { connect } from 'react-redux';
import CommentsList from './CommentsList';

class AddressCard extends React.Component {
    render() {
        const{contact} = this.props

        return(
            <div className="addressCard">
                <div className="adressInfo">                
                    <span>{contact.address.city}</span>
                    <span>{contact.address.street}</span></div>
                    <div><CommentsList comments={contact.comments} contactId={contact.id} /></div>
            </div>
        )
    }
}

const mapStoreToProps = (store, ownProps) => {
    return {
    }
}

export default connect(mapStoreToProps, {})(AddressCard)