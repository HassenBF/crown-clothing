import React from 'react';
import './App.css';
import {Route,Switch} from 'react-router-dom';
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header  from "./components/header/header.component";


function App() {
  return (
    <div >
        {/*by putting header outside of switch we ensure that it's always rendered*/}
        <Header/>
        <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/shop' component={ShopPage}/>
        </Switch>
    </div>
  );
}

export default App;
