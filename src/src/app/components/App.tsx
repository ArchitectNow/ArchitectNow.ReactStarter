import * as React from 'react';
import './App.scss';
import { Sidebar } from './sidebar/sidebar';
import {Redirect, Route, Switch} from 'react-router';
import {People} from './people/people';
import {Home} from './home/home';
import {Error} from './error/error';

class App extends React.Component {

  render() {
    return (
      <div>
          <Sidebar/>
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/home" component={Home} />
              <Route path="/people" component={People} />
              <Route path="/error" component={Error} />
              <Redirect to="/error"/>
          </Switch>
      </div>
    );
  }
}

export default App;
