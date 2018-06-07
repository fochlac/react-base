import React from "react";
import AddressList from "./AddressList.jsx";
import SearchInput from "./SearchInput.jsx";
import Address from "./Address.jsx";
import { connect } from "react-redux";
import { addAddress } from "STORE/actions.js";
import { logout } from "STORE/actions.js";
import {
      BrowserRouter as Router,
      Route,
      Redirect,
      Switch
    } from 'react-router-dom';

import "APP/BaseStyle.less";

class Body extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    const { isAddressListEmpty } = this.props;
    return (
      <div className="body">
        <SearchInput /> <br/>
        { 
          (this.props.app.addingAddress ? <Address />
          : <button onClick={this.props.addAddress}> Adresse hinzufügen</button>)
        }
        {
          isAddressListEmpty ? <AddressList /> : <p>address list not defined </p>
        }
        <button onClick={this.props.logout}>Logout</button>

        <Router>
            <Switch>
                <Route path="/body" exact render={() => <Body />} />
            </Switch>
        </Router>
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

export default connect(mapStoreToProps, { addAddress, logout })(Body);
