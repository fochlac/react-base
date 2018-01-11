import React from 'react';
import { connect } from 'react-redux';
import { delete_name } from 'STORE/actions.js';
import { Link } from 'react-router-dom';
import DefaultPage from 'COMP/DefaultPage.jsx';

export class GoodbyeWorld extends React.Component {
    constructor(props) {
        super();

        this.state = {}
    }

    render() {
        return (
        	<DefaultPage>
        		{
        			this.props.user.name
        			? <div>
        				<p>Tschüß, {this.props.user.name}</p>
        				<Link to="/" onClick={this.props.delete_name}>Ich bin weg!</Link>
        			</div>
        			: <div>
        				<p>Tschau!</p>
        			</div>
        		}
        	</DefaultPage>
        );
    }

};

const mapStateToProps = (state, ownProps) => ({
    user: state.user
});

export default connect(mapStateToProps, { delete_name })(GoodbyeWorld);