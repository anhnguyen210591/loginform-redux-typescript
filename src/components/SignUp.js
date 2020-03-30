import React, { Component } from 'react'
import {connect} from 'react-redux'
import {signup} from '../actions'
import {Redirect} from 'react-router-dom'


export class SignUp extends Component {
    constructor(props){
        super(props);
    this.state={
        email:'',
        password:'',
        firstname:'',
        lastname:''
    }
    }

    handleChange = (e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit = (e)=>{
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
                    {this.props.isSignUpSuccess && <Redirect to='/'></Redirect>}
                    {this.props.isSignUpError && <div>{this.props.isSignUpError}</div>}
                </div>
                </form>
                
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        isSignUpPending : state.signup.isSignUpPending,
        isSignUpSuccess : state.signup.isSignUpSuccess,
        isSignUpError : state.signup.isSignUpError
    };
}

const mapDispatchToProps =(dispatch) =>{
    return{
        signup:(email,password,firsname,lastname)=>dispatch(signup(email,password,firsname,lastname))
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(SignUp)
