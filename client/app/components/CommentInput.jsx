import React from 'react';
import { connect } from 'react-redux';
import { add_comment } from 'STORE/actions.js';
import { setter } from 'UTIL/inputSetter.js';

export class CommentInput extends React.Component {
    constructor(props) {
        super();

        this.state = { }

        this.set = setter(this);
    }

    submit() {


        this.props.add_comment({
            text: this.state.text,
            post: this.props.postid,
            user: this.props.user.id
        });
    }

    render() {
        return (
            <div>
                <textarea placeholder="Neuer Kommentar ..." onChange={this.set({field: 'text'})}/>
                <button type="submit" onClick={this.submit.bind(this)}>Abschicken</button>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    user: state.user,
    postid: ownProps.post_id,
});

export default connect(mapStateToProps, { add_comment })(CommentInput);