import React, { Component } from 'react'
import './App.css';
import Homepage from "./pages/homepage/Homepage";
import Shop from "./pages/shop/Shop"
import {Switch,Route,} from "react-router-dom"
import Header from "./components/header/Header"
import SignInSignUp from "./pages/sign-in-and-sign-up/SignInSignUp"
import {auth} from "./firebase/Firebase.utils" 


export default class App extends Component {
  
  constructor(){
    super();
    this.state = {
      User : null
    }
  }


unSubscribeFromAuth = null

componentDidMount(){
  this.unSubscribeFromAuth = auth.onAuthStateChanged(user=>{this.setState({User:user})
    console.log(user);
  });
}

componentWillUnmount(){
  this.unSubscribeFromAuth();
}


  render() {
    return (
      <div >
      <Header currentUser={this.state.User} />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route  path="/shop" component={Shop} />
        <Route path="/signin" component={SignInSignUp}  />
      </Switch>
       </div>
    );
  }
}

// import React,{useState,useEffect} from 'react'

// function App() {

//   const [User, setUser] = useState(null)

// var unSubscribeFromAuth = null
  
//   useEffect(() => {
//     unSubscribeFromAuth = auth.onAuthStateChanged(user=>{setUser(user)
//     console.log(user);
//   }); 
//   }, [])



//   return (
//     <div>
//       <Header currentUser={User} />
//       <Switch>
//         <Route exact path="/" component={Homepage} />
//         <Route  path="/shop" component={Shop} />
//         <Route path="/signin" component={SignInSignUp}  />
//       </Switch>
//     </div>
//   )
// }

// export default App

