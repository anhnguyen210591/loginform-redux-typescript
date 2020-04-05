import React from 'react'
import {connect} from 'react-redux'
import {AppState } from '../store'
import { UserInfo } from '../types/Userinfo'

interface OwnProps {
}

interface ConnectorProps {
data:any
}


interface ActionCreators{
}

const matpStateToProps = (state:AppState):ConnectorProps =>{
    return{
        data : state.login.setUserInfoReducers,
    };
}



type UserInfoProps = OwnProps&ConnectorProps&ActionCreators

class UserProfile extends React.Component<UserInfoProps,UserInfo> {
    constructor(props:UserInfoProps){
        super(props);
        this.state={
            _id:"",
            email:"",
            password:"",
            firstname:"",
            lastname:""
        };
    }


    
    render(){
        console.log("data",this.props.data)
        return (
            <div className='userInfo container'>
                <div className='row'>
                <p>Email : {this.props.data.data.email}</p>
                <p>FirstName :{this.props.data.data.firstname}</p>
                <p>LastName :{this.props.data.data.lastname}</p>
                </div>
            </div>
        )
    }
}


export default connect(matpStateToProps)(UserProfile)