import React from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css';

import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.componet';
import HeaderMenu from './components/header/header.component';

function App() {
  return (
    <div>
      <HeaderMenu/>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>

  );
}

export default App;
