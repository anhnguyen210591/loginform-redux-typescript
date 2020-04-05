import React from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {logout} from '../actions/login'
import {bindActionCreators} from 'redux'
import {Redirect} from 'react-router-dom'



interface OwnProps {
}

interface ConnectorProps {
 
}

interface ActionCreators{
    logout:()=>void
}

const mapDispatchToProps =(dispatch:any):ActionCreators=>{
    return{
        logout:bindActionCreators(logout,dispatch)
    };
}

type Loginprops = OwnProps&ConnectorProps&ActionCreators


class SignedInLinks extends React.Component<Loginprops>{
    render(){
    return (
        <ul className='right'>
            <li><button className="btn black" onClick={this.props.logout}>LogOut</button></li>
            <li><NavLink to='/userProfile' className='btn btn-floating pink lighten-1'>AA</NavLink></li>
        </ul>
    )
}
}

export default connect(null,mapDispatchToProps)(SignedInLinks)