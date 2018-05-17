import React from 'react';

import 'APP/BaseStyle.less';
import Topbar from './Topbar.jsx';
import Body from './Body.jsx';

export default class App extends React.Component {
    constructor(props) {
        super();

        this.state = {
            currentPage: 'Home',
            currentUser: 'test',
            currentAge: 0,
            currentAdress:{
                currentStreet: '',
                currentCity: ''
            }
        }

    }

    onLogout(){
        this.setState({
            currentUser: undefined
        })
    }

    onLogin(name, age){
        this.setState({
            currentUser: name,
            currentAge: age
        })
    }

    onSubmitAdress(street, city){
        this.setState({
            currentAdress:{
                currentCity: city,
                currentStreet: street
            }
        })
    }

    render() {
        const {currentUser, currentPage, currentAge, currentAdress} = this.state

        return(
            <div className="body">
                <Topbar currentPage={currentPage} currentUser={currentUser}  currentAge={currentAge} onLogin={(name, age) => this.onLogin(name, age)}/>

                {
                    currentUser && Number.isInteger(+currentAge)
                    && <Body currentAdress={currentAdress} onSubmitAdress={(street, city) => this.onSubmitAdress(street, city)} />
                }
                {
                    currentUser && Number.isInteger(+currentAge)
                    && <button onClick={() => this.onLogout()}>Logout</button>
                }
            </div>
        )
    }
}
