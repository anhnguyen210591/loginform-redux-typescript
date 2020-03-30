import React from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {logout} from '../actions/login'


class SignedInLinks extends React.Component{
    render(){
    return (
        <ul className='right'>
            <li><button className="btn black" onClick={this.props.logout}>LogOut</button></li>
            <li><NavLink to='/' className='btn btn-floating pink lighten-1'>AA</NavLink></li>
        </ul>
    )
}
}


const mapDispatchToProps =(dispatch)=>{
    return{
    logout:()=>dispatch(logout())
    }
}

export default connect(null,mapDispatchToProps)(SignedInLinks)