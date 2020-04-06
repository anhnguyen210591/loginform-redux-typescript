import React, { Component } from 'react'
import {connect} from 'react-redux'
import {editProfile} from '../actions'
import {EditProfileStatus} from '../types/EditProfileStatus'
import {UserInfo} from '../types/Userinfo'
import {AppState } from '../store'
import {bindActionCreators} from 'redux'




interface OwnProps {
}

interface ConnectorProps {
    isEditProfilePending:EditProfileStatus["isEditProfilePending"],
    isEditProfileSuccess:EditProfileStatus["isEditProfileSuccess"],
    isEditProfileError:EditProfileStatus["isEditProfileError"],
    data:any
}


interface ActionCreators{
    editProfile:(
    userId:UserInfo["_id"]
    ,email:UserInfo["email"]
    ,password:UserInfo["password"]
    ,firsname:UserInfo["firstname"]
    ,lastname:UserInfo["lastname"]
    )=>void
}

const mapStateToProps = (state:AppState):ConnectorProps =>{
    return{
        isEditProfilePending : state.editProfile.isEditProfilePending,
        isEditProfileSuccess : state.editProfile.isEditProfileSuccess,
        isEditProfileError : state.editProfile.isEditProfileError,
        data : state.setUserInfo
    };
}

const mapDispatchToProps =(dispatch:any):ActionCreators =>{
    return{
        editProfile:bindActionCreators(editProfile,dispatch)
    };
}

type EditProfileprops = OwnProps&ConnectorProps&ActionCreators


export class EditProfile extends Component<EditProfileprops,UserInfo> {
    constructor(props:EditProfileprops){
        super(props);
    this.state={
        _id:"",
        email:"",
        password:"",
        firstname:"",
        lastname:""
    }
    }

    handleChange = (e:any)=>{
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e:any)=>{
        console.log("data id",this.props.data.data.id)
        e.preventDefault();
        this.props.editProfile(
            this.props.data.data.id
            ,this.state.email
            ,this.state.password
            ,this.state.firstname
            ,this.state.lastname)
    }

    render() {        
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
                    <button className="btn black">Edit Profile</button>
                    {this.props.isEditProfilePending && <div>Loading....</div>}
                    {this.props.isEditProfileSuccess && <div>EditProfile Up succesful</div>}
                    {this.props.isEditProfileError && <div>{this.props.isEditProfileError}</div>}
                </div>
                </form>
                
            </div>
        )
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(EditProfile)
