import React from 'react';

export default class DefaultPage extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div className="DefaultPage" >
                <div className="header">
                    <h3>{this.props.title}</h3>
                </div>
                <div className="body">
                    {this.props.children}
                </div>
            </div>
        );
    }
};