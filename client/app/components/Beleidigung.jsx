import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { setter } from 'UTIL/inputSetter.js';
import './UserInput.less';

export class Beleidigung extends React.Component {
    constructor(props) {
        super();
    }


    render() {
      var val = this.props.age;
      switch (true) {
        case (val > 80):
          return (<p>Oh, und du lebst noch?</p>)
        case (val <= 80 && val > 60):
          return (<p>Alter Sack!</p>)
        case (val <= 60 && val > 40):
          return (<p>In der Blüte deines Lebens? Eigentlich schon welk!</p>)
        case (val <= 40 && val > 20):
          return (<p>Du denkst die Welt hat auf dich gewartet? Komm du erstmal in mein Alter.</p>)
        case (val <= 20 && val > 12):
          return (<p>Ihh, Pickliger Teenager.</p>)
        case (val <= 12 && val > 0):
          return (<p>Na, Hosenscheißer.</p>)
        default:
          return (<p>Du bist zu doof zum Scheißen, oder? Gib dein Alter ein!!!!</p>)
      }
    }

};



const mapStateToProps = (state, ownProps) => ({
    age: state.user.age
});

export default connect(mapStateToProps)(Beleidigung);
