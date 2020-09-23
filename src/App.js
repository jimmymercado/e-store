import React from 'react';
import {Switch, Route} from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.componet';
import SignInAndSignupPage from './pages/signin-signup/signin-signup.component';

import HeaderMenu from './components/header/header.component';

import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user.actions';


class App extends React.Component {

  unsubscribeFromAuth = null;

  
  componentDidMount() {

    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      //this.setState({currentUser:userAuth});
      //createUserProfileDocument(userAuth);      
      //console.log(user);

      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        
        userRef.onSnapshot(snapshot => {
          //console.log(snaphot.data());
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()            
          });
        });
        
      }else{
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <HeaderMenu/>
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignupPage} />
        </Switch>
      </div>

    );
  }
}

const mapDispatchToProps  = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});
export default connect(null, mapDispatchToProps)(App);
