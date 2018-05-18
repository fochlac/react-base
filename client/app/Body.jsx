import React from "react";
import AddressList from "./AddressList.jsx";
import Address from "./Address.jsx";
import { set_address } from "STORE/actions.js";
import { connect } from "react-redux";
import { addAddress } from "STORE/actions.js";

import "APP/BaseStyle.less";

class Body extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    const { isAddressList } = this.props;
    return (
      <div className="body">
        {this.props.app.addingAddress ? (
          <Address />
        ) : (
          <button onClick={this.props.addAddress}>Adresse hinzufügen</button>
        )}
        {isAddressList ? <AddressList /> : "address list not defined"}
      </div>
    );
  }
}

const mapStoreToProps = (store, ownProps) => {
  return {
    app: store.app,
    //isAddressSet: store.contact.address.street && store.contact.address.city,
    isAddressListEmpty:
      store.contacts && Object.values(store.contacts).length > 0
  };
};

export default connect(mapStoreToProps, { addAddress })(Body);
