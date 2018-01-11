import React from 'react';

export default class DefaultPage extends React.Component {
    constructor(props) {
        super();
    }

    submit() {
        this.props.set_name(this.state.name);
        this.props.set_date(this.state.date);
    }

    render() {
        let id = parseInt(Date.now() * Math.random());

        return (
            <div className="DefaultPage" >
                <div className="header">
                    <h3>Hallo Welt - Beispiel</h3>
                </div>
                <div className="body">
                    {this.props.children}
                </div>
            </div>
        );
    }
};
