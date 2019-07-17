import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Login from './routes/Login/Login';
import Register from './routes/Register/Register';
import Find from './routes/Find/Find';
import Shop from './routes/Shop/Shop';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header/>
          <Switch>
            <Route exact path ="/" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/find" component={Find}/>
            <Route path="/shop" component={Shop}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;