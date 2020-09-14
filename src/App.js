import React from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css';

import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.componet';
import SignInAndSignupPage from './pages/signin-signup/signin-signup.component';

import HeaderMenu from './components/header/header.component';

import {auth, createUserProfileDocument} from './firebase/firebase.utils';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      //this.setState({currentUser:userAuth});
      //createUserProfileDocument(userAuth);      
      //console.log(user);

      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        
        userRef.onSnapshot(snaphot => {
          //console.log(snaphot.data());
          this.setState({
            currentUser:{
              id: snaphot.id,
              ...snaphot.data()
            }            
          }, () => {
            console.log(this.state);
          });


        });
        
      }else{
        this.setState({currentUser:userAuth});
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <HeaderMenu currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignupPage} />
        </Switch>
      </div>

    );
  }
}

export default App;
