import React from "react";
import { connect } from "react-redux";
import {
      BrowserRouter as Router,
      Route,
      Redirect,
      Switch
    } from 'react-router-dom';

import "APP/BaseStyle.less";
import Topbar from './Components/Topbar.jsx';
import Body from "./Components/Body.jsx";

class App extends React.Component {
  render() {
    const {isLogged} = this.props
    return (

      <div className="test">
       {this.props.app.isLogged ? 
        <Body /> 
        : <Topbar /> }
         
      </div>
    );
  }
}

const mapStoreToProps = (store, ownProps) => {
  return {
       app: store.app
  };
};

export default connect(mapStoreToProps, {})(App);
