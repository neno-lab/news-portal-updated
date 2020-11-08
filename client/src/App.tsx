import React from 'react';
import Home from './components/Home/Home';
import {Router, Switch, Route } from 'react-router-dom';
import './app.scss';
import ArticlePage from './components/pages/ArticlePage';
import history from "./history"

const App: React.FC=()=> {
  return (
    <div className='app'>
      <Router history={history}>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/article' component={ArticlePage}/>
          <Route path='/' render={()=><h1>Not Found</h1>}/>
        </Switch>
      </Router>
      </div>
  );
};

export default App;