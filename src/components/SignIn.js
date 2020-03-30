import React, { Component } from 'react'
import {connect} from 'react-redux'
import {login} from '../actions'
import {Redirect} from 'react-router-dom'


export class SignIn extends Component {
    constructor(props){
    super(props);
    this.state={
        email:"",
        password:""
    };
    }

    handleChange = (e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        this.props.login(this.state.email,this.state.password)
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className='white'>

                <div className="input-field">
                    <label>Email</label>
                    <input name="email" type="email" onChange={this.handleChange}/>
                </div>

                <div className="input-field">
                    <label>Password</label>
                    <input name="password" type="password"  onChange={this.handleChange}/>
                </div>

                <div className="input-field">
                    <button className="btn black">Login</button>
                {this.props.isLoginPending && <div>Loading....</div>}
                {this.props.isLoginSuccess && <Redirect to='/'></Redirect>}
                {this.props.isLoginError && <div>{this.props.isLoginError}</div>}

                </div>
                </form>
                
            </div>
        )
    }
}


const matpStateToProps = (state) =>{
    return{
        isLoginPending : state.login.isLoginPending,
        isLoginSuccess : state.login.isLoginSuccess,
        isLoginError : state.login.isLoginError
    };
}

const mapDispatchToProps =(dispatch) =>{
    return{
        login:(email,password)=>dispatch(login(email,password))
    };
}

export default connect(matpStateToProps,mapDispatchToProps)(SignIn)
