import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Main from './routes/Main/Main';
import Register from './routes/Register/Register';
import Find from './routes/Find/Find';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header/>
          <Switch>
            <Route exact path ="/" component={Main}/>
            <Route path="/find" component={Find}/>
            <Route path="/register" component={Register}/>
            {/* <Route path="login" component={}/> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;