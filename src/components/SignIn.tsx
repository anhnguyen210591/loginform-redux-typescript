import React, { Component } from 'react'
import {connect} from 'react-redux'
import {login} from '../actions'
import {Redirect} from 'react-router-dom'
import {LoginStatus} from '../types/LoginStatus'
import {AppState } from '../store'
import {bindActionCreators} from 'redux'
import { UserInfo } from '../types/Userinfo'

interface OwnProps {
}

interface ConnectorProps {
    isLoginPending:LoginStatus["isLoginPending"],
    isLoginSuccess:LoginStatus["isLoginSuccess"],
    isLoginError:LoginStatus["isLoginError"]
}


interface ActionCreators{
    login:(email:UserInfo["email"],password:UserInfo["password"])=>void
}


const matpStateToProps = (state:AppState):ConnectorProps =>{
    return{
        isLoginPending : state.login.isLoginPending,
        isLoginSuccess : state.login.isLoginSuccess,
        isLoginError : state.login.isLoginError
    };
}

const mapDispatchToProps =(dispatch:any):ActionCreators =>{
    return{
        login:bindActionCreators(login,dispatch)
    };
}

type Loginprops = OwnProps&ConnectorProps&ActionCreators


export class SignIn extends Component<Loginprops,UserInfo> {
    constructor(props:Loginprops){
    super(props);
    this.state={
        _id:"",
        email:"",
        password:"",
        firstname:"",
        lastname:""
    };
    }

    handleChange = (e:any)=>{
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e:any)=>{
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




export default connect(matpStateToProps,mapDispatchToProps)(SignIn)
