import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Map from './routes/Map/Map';
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
            <Route path="/map" component={Map}/>
            <Route path="/register" component={Register}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;