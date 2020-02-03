import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Dashboard from './components/Dashboard/Dashboard';
import store from './store';
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      something: false
    }
  }
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Switch>
              <Route exact path='/' component={Login} />
              <Route exact path='/register' component={Register} />
              <Route exact path='/dashboard' component={Dashboard} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;