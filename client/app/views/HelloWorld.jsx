import React from 'react';
import { connect } from 'react-redux';
import { } from 'STORE/actions.js';
import { Link } from 'react-router-dom';
import UserInput from 'COMP/UserInput.jsx';
import AgeInput from 'COMP/AgeInput.jsx';
import DefaultPage from 'COMP/DefaultPage.jsx';

export class HelloWorld extends React.Component {
    constructor(props) {
        super();

        this.state = { }
    }

    renderContent() {

    }

    render() {
        return (
            <DefaultPage>
                {
                    this.props.user.age
                    ? <span>{this.props.user.age ? this.props.user.age : ''}</span>
                    : ''
                },
                {
                    this.props.user.name
                    ? <div>
                        <p>Hallo, {this.props.user.name}</p>
                        <span>{this.props.user.age ? this.props.user.age : ''}</span>
                        <Link to="/bye">Tschüss! <span className="fa fa-angle-double-right"></span></Link>
                    </div>
                    : <div>
                        <p>Oh, dich kenn ich noch nicht...</p>
                        <p>Wie ist denn dein Name?</p>
                        <UserInput />
                        <AgeInput />
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