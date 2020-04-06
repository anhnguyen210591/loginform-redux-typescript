import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import SignInLinks from './SignInLinks'
import SignOutLinks from './SignOutLinks'
import {LoginStatus} from '../types/LoginStatus'
import {AppState } from '../store'


interface OwnProps {
}

interface ConnectorProps {
    isLoginPending:LoginStatus["isLoginPending"],
    isLoginSuccess:LoginStatus["isLoginSuccess"],
    isLoginError:LoginStatus["isLoginError"]
}

interface ActionCreators{
}

type NavbarProps=OwnProps&ConnectorProps&ActionCreators

const mapStateToProps = (state:AppState) =>{
    return{
        isLoginPending : state.login.isLoginPending,
        isLoginSuccess : state.login.isLoginSuccess,
        isLoginError : state.login.isLoginError
    };
}


class Navbar extends React.Component<NavbarProps> {
  

    render() {
        console.log("status after login",this.props.isLoginSuccess)
        return (
            (
                <nav className='nav-wrapper grey darken-3'>
                    <div className='container'>
                        <Link to='/' className='brand-logo'>Practise </Link>
                        {
                            this.props.isLoginSuccess ?  <SignInLinks/> :  <SignOutLinks/>
                        }
                    </div>
                </nav>
            )
        )
    }
}



export default connect(mapStateToProps)(Navbar)
