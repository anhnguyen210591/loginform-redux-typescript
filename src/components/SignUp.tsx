import React, { Component } from 'react'
import {connect} from 'react-redux'
import {signup} from '../actions'
import {SignupStatus} from '../types/SignupStatus'
import {UserInfo} from '../types/Userinfo'
import {AppState } from '../store'
import {bindActionCreators} from 'redux'




interface OwnProps {
}

interface ConnectorProps {
    isSignUpPending:SignupStatus["isSignUpPending"],
    isSignUpSuccess:SignupStatus["isSignUpSuccess"],
    isSignUpError:SignupStatus["isSignUpError"]
}


interface ActionCreators{
    signup:(email:UserInfo["email"]
    ,password:UserInfo["password"]
    ,firsname:UserInfo["firstname"]
    ,lastname:UserInfo["lastname"]
    )=>void
}

const mapStateToProps = (state:AppState):ConnectorProps =>{
    return{
        isSignUpPending : state.signup.isSignUpPending,
        isSignUpSuccess : state.signup.isSignUpSuccess,
        isSignUpError : state.signup.isSignUpError
    };
}

const mapDispatchToProps =(dispatch:any):ActionCreators =>{
    return{
        signup:bindActionCreators(signup,dispatch)
    };
}

type Signuprops = OwnProps&ConnectorProps&ActionCreators


export class SignUp extends Component<Signuprops,UserInfo> {
    constructor(props:Signuprops){
        super(props);
    this.state={
        email:'',
        password:'',
        firstname:'',
        lastname:''
    }
    }

    handleChange = (e:any)=>{
        this.setState({
            ...this.state,
            email:e.currentTarget.value,
            password:e.currentTarget.value,
            firstname:e.currentTarget.value,
            lastname:e.currentTarget.value
        })
    }

    handleSubmit = (e:any)=>{
        e.preventDefault();
        this.props.signup(this.state.email,this.state.password,this.state.firstname,this.state.lastname)
    }

    render() {
        
        console.log("sign-up error",this.props.isSignUpError)
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className='white'>

                <div className="input-field">
                    <label>First Name</label>
                    <input type="text" name="firstname" onChange={this.handleChange}/>
                </div>

                <div className="input-field">
                    <label>Last Name</label>
                    <input type="text" name="lastname" onChange={this.handleChange}/>
                </div>  

                <div className="input-field">
                    <label>Email</label>
                    <input type="email" name="email" onChange={this.handleChange}/>
                </div>

                <div className="input-field">
                    <label>Password</label>
                    <input type="password" name="password" onChange={this.handleChange}/>
                </div>

                <div className="input-field">
                    <button className="btn black">Sign Up</button>
                    {this.props.isSignUpPending && <div>Loading....</div>}
                    {this.props.isSignUpSuccess && <div>Sign Up succesful</div>}
                    {this.props.isSignUpError && <div>{this.props.isSignUpError}</div>}
                </div>
                </form>
                
            </div>
        )
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(SignUp)
