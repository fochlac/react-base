import React from "react";
import { connect } from "react-redux";
import "APP/BaseStyle.less";

class ErrorMessage extends React.Component {
  render() {
    return (
      <div className="test">
         <span>{this.props.app.text}</span>
      </div>
    );
  }
}

const mapStoreToProps = (store, ownProps) => {
  return {
    app: store.app
  };
};

export default connect(mapStoreToProps, {})(ErrorMessage);
