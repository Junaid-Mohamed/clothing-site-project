import React, { Component } from 'react'
import {Switch,Route,Redirect} from "react-router-dom"

import {connect} from "react-redux"
import {createStructuredSelector} from "reselect"
import './App.css';

import CheckoutPage from "./pages/checkout/CheckoutPage"
import Homepage from "./pages/homepage/Homepage";
import Shop from "./pages/shop/Shop"
import SignInSignUp from "./pages/sign-in-and-sign-up/SignInSignUp"

import {selectUser} from "./redux/user/User.selectors"
import {setUser} from "./redux/user/User.action"

import Header from "./components/header/Header"

import {auth,createUserProfileDocument} from "./firebase/Firebase.utils" 




class App extends Component {
  
  
unSubscribeFromAuth = null

componentDidMount(){
  const {setUser} = this.props;
  this.unSubscribeFromAuth = auth.onAuthStateChanged( async userAuth=>{

    if(userAuth){
      const userRef = await createUserProfileDocument(userAuth);

      userRef.onSnapshot(snapShot=>{
          setUser({
            id : snapShot.id,
            ...snapShot.data()
          });
      });
     
    }
    setUser(userAuth) // if user has logged out , setting it to null.
  });
}

componentWillUnmount(){
  this.unSubscribeFromAuth();
}


  render() {
    console.log(this.props)
    return (
      <div >
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route  path="/shop" component={Shop} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route exact path="/signin" render={()=>this.props.User?(<Redirect to="/" />):(<SignInSignUp />)}  />
      </Switch>
       </div>
    );
  }
}

const mapStateToProps =createStructuredSelector ({
  User : selectUser
})


const mapDispatchToProps = dispatch =>({
  setUser : user => dispatch(setUser(user)) // dispatch() function -> whatever object is passed will be passed as action object to every reducer 
})


export default connect(mapStateToProps,mapDispatchToProps)(App)


// connect arguements are mapStateToProps,mapDispatchToProps 
// if any of this argument is not required we pass in null
