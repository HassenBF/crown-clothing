import React from 'react';
import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import {Route,Switch} from 'react-router-dom'

const HatsPage = () => (
    <div>
        <h> HATS PAGE</h>
    </div>
);


function App() {
  return (
    <div >
        <switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='hats' component={HatsPage}/>
        </switch>
    </div>
  );
}

export default App;
