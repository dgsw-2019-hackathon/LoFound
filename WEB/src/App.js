import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Login from './routes/Login/Login';
import Register from './routes/Register/Register';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header/>
          <Switch>
            <Route exact path ="/" component={Login}/>
            <Route path="/register" component={Register}/>
            {/* <Route path="login" component={}/> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;