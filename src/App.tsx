import React from 'react';
import './App.css';

import { Home } from './app/components/home-component/home.component';
import { About } from './app/components/about-component/about.component';
import { Reports } from './app/components/reports-component/reports.component';
import { Card } from './app/components/card-component/card.component';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Navigation } from './app/components/navigation-component/navigation.component';

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/reports' exact component={Reports}/>
          <Route path='/about' exact component={About}/>
          <Route path='/card' exact component={Card}/>
        </Switch>
      </Router>
    </ >
  );
}

export default App;
