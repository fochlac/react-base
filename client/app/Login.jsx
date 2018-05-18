import React from "react";
import { connect } from "react-redux";
import { login } from "STORE/actions.js";

class Login extends React.Component {
  constructor(props) {
    super();

    this.state = {
      username: "",
      age: ""
    };
  }

  render() {
    const { username, age } = this.state;

    return (
      <div className="login">
        <input
          type="text"
          value={username}
          onChange={evt => this.setState({ username: evt.target.value })}
        />{" "}
        <br />
        <input
          type="text"
          value={age}
          onChange={evt => this.setState({ age: evt.target.value })}
        />
        <button
          onClick={() =>
            this.props.login({ name: username, age: parseInt(age) })
          }
        >
          Submit
        </button>
      </div>
    );
  }
}

const mapStoreToProps = (store, ownProps) => {
  return {};
};

export default connect(mapStoreToProps, { login })(Login);
