import React from 'react';
import Navbar from './component/Navbar';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './component/pages/Home';

import './App.css';


function App() {
  return (
  <>
    <Router>
      <Navbar />
     
      <Switch>
        <Route path='/' exact  component=
        {Home}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
