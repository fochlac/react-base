import React from 'react';
import Adress from './Adress.jsx'

import 'APP/BaseStyle.less';

export default class Topbar extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        const {currentAdress, onSubmitAdress} = this.props
        return(
            <div className="body">
                <h3>Adresse</h3>

                {
                  currentAdress.currentStreet && currentAdress.currentCity
                  ? <div> 
                    <p>Deine Straße {currentAdress.currentStreet}</p> 
                    <p>Dein Stadt ist: {currentAdress.currentCity}</p> 
                    </div> 
                  : <Adress onSubmitAdress={onSubmitAdress}/>
                  
                }
            </div>
        )
    }
}
