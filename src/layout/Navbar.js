import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import SignInLinks from './SignInLinks'
import SignOutLinks from './SignOutLinks'
import {NavLink} from 'react-router-dom'
import {logout} from '../actions'


class Navbar extends React.Component {
    constructor(props){
    super(props);
    this.state={
        isLoggedIn: false
    };
    }
    componentWillReceiveProps(next) {
        this.setState({
            isLoggedIn: next.isLoginSuccess
        })
    }

    render() {
        return (
            (
                <nav className='nav-wrapper grey darken-3'>
                    <div className='container'>
                        <Link to='/' className='brand-logo'>Practise </Link>
                        {
                            this.state.isLoggedIn ?  <SignInLinks/> :  <SignOutLinks/>
                        }
                    </div>
                </nav>
            )
        )
    }
}


const mapStateToProps = (state) =>{
    return{
        isLoginPending : state.login.isLoginPending,
        isLoginSuccess : state.login.isLoginSuccess,
        isLoginError : state.login.isLoginError
    };
}





export default connect(mapStateToProps)(Navbar)
