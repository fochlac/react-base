import React from 'react';
import { connect } from 'react-redux';
import { } from 'STORE/actions.js';
import { Link } from 'react-router-dom';
import UserInput from 'COMP/UserInput.jsx';
import UserInputAge from 'COMP/UserInputAge.jsx';
import Beleidigung from 'COMP/Beleidigung.jsx';
import DefaultPage from 'COMP/DefaultPage.jsx';

export class HelloWorld extends React.Component {
    constructor(props) {
        super();

        this.state = {

         }
    }

    renderSlides() {
        switch (this.props.app.step) {
          case 'ONE':
              return (
                <div>
                  <p>Oh, dich kenn ich noch nicht...</p>
                  <p>Wie ist denn dein Name?</p>
                  <UserInput />
                </div>
              )

          case 'TWO':
          return (
            <div>
              <p>Hallo, {this.props.user.name}!</p>
              <p>Wie alt bist du denn?</p>
              <UserInputAge />
            </div>
          )

          case 'THREE':
          if(this.props.user.age) {
            return (
              <div>
                <p>Alles klar, <strong>{this.props.user.name}</strong>. Du bist also <strong>{this.props.user.age}</strong> Jahre alt?!</p>
                <Beleidigung />
                <Link to="/bye">Tschüss! <span className="fa fa-angle-double-right"></span></Link>
              </div>
            )
          }
          else {
            return <Beleidigung />
          }

            break;
          default:

        }
    }

    render() {
        return (
        	<DefaultPage>
        		{
              this.renderSlides()
        		}
        	</DefaultPage>
        );
    }
};

const mapStateToProps = (state, ownProps) => ({
    user: state.user,
    app: state.app
});

export default connect(mapStateToProps, {})(HelloWorld);
