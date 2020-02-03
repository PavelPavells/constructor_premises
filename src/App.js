import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import store from './store';
import './App.scss';

let App = () => {
  return (
    <Provider store={store}>
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/dashboard' component={Dashboard} />
        </Switch>
      </div>
    </Router>
    </Provider>
  );
}
export default App;