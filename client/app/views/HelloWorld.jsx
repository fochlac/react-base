import React from 'react';
import { connect } from 'react-redux';
import { } from 'STORE/actions.js';
import { Link } from 'react-router-dom';
// import UserInput from 'COMP/UserInput.jsx';
// import AgeInput from 'COMP/AgeInput.jsx';
import Input from 'COMP/Input.jsx';
import Button from 'COMP/Button.jsx';
import DefaultPage from 'COMP/DefaultPage.jsx';

export class HelloWorld extends React.Component {
    constructor(props) {
        super();

        this.state = { }
    }

    updateState(propState) {
        let userData = Object.assign({}, this.state.userData, propState)

        this.setState({userData})
    }

    render() {
        return (
            <DefaultPage>
            {
                this.props.user.name
                ? <div>
                    <p>
                        Hallo, {this.props.user.name}<br />
                        <span>du bist suesse {this.props.user.age ? this.props.user.age : ''} Jahre alt.</span>
                    </p>
                    <Link to="/bye">Tschüss! <span className="fa fa-angle-double-right"></span></Link>
                  </div>
                : <div>
                    <p>Oh, dich kenn ich noch nicht...</p>
                    <p>Wie ist denn dein Name?</p>
                    <Input data="name" onChange={this.updateState.bind(this)} />
                    <Input data="age" onChange={this.updateState.bind(this)} />
                    <Button data={this.state.userData} />
                </div>
            }
            </DefaultPage>
        );
    }
};

const mapStateToProps = (state, ownProps) => ({
    user: state.user
});

export default connect(mapStateToProps, {})(HelloWorld);