import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './layout/Navbar'
import Dashboard from './dashboard/Dashboard'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import UserProfile from './components/UserProfile'
import EditProfile from './components/EditProfile'

class App extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.state={apiResponse :""}
  // }

  // callAPI(){
  //   fetch("http://localhost:9000/testAPI")
  //   .then(res => res.text())
  //   .then(res => this.setState({apiResponse:res}))
  //   .catch(err => err)
  // }

  // componentDidMount(){
  //   this.callAPI()
  // }

  
  render(){
    return(
      <BrowserRouter>
        <div className='App'>
           <Navbar/>
           <Switch>
              <Route exact path='/' component={Dashboard}/>
              <Route path='/signin' component={SignIn}/>
              <Route path='/signup' component={SignUp}/>
              <Route path='/signup' component={SignUp}/>
              <Route path='/userProfile' component={UserProfile}/>
              <Route path='/editProfile' component={EditProfile}/>
           </Switch>
        </div>
      </BrowserRouter>
      
    )
  }
  }

export default App