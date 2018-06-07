import React from "react";
import { connect } from "react-redux";
import { login, showErrorMessage } from "STORE/actions.js";
import ErrorMessage from './ErrorMessage.jsx';

class Login extends React.Component {
  constructor(props) {
    super();

    this.state = {
      username: props.user.name,
      password: props.user.password
    };
  }

  validInput(e){
    if((this.props.user.name == this.state.username) && (this.props.user.password == this.state.password)){
        this.props.login()
    } else {
        this.props.showErrorMessage("Falsche Eingabe")
    }
  }

  

  onChangeInputUsername(e){
    this.setState({
      username: e.target.value
    })
  }

  onChangeInputPassword(e){
    this.setState({
      password: e.target.value
    })
  }

  render() {
    const { username, password } = this.state;

    return (
      <div className="login">
        <input
          type="text"
          value={username}
          onChange={this.onChangeInputUsername.bind(this)}
        />
        <br />
        <input
          type="password"
          value={password}
          onChange={this.onChangeInputPassword.bind(this)}
        />
        <button autoFocus
          onClick={ (evt) => this.validInput(evt)
          }
        >
          Login
        </button>
        {
          this.props.app.showErrorMessage ? <ErrorMessage/> : " "
        }
      </div>
    );
  }
}

const mapStoreToProps = (store, ownProps) => {
  return {
    app: store.app,
    user: store.user
  };
};

export default connect(mapStoreToProps, { login, showErrorMessage })(Login);
