import * as React from 'react';
import './App.scss';
import {Redirect, Route, Switch} from 'react-router';
import {Error} from './error/error';
import {Shell} from './shell/shell';
import {BrowserRouter} from "react-router-dom";

export class App extends React.Component {

  render() {
    return (

        <BrowserRouter>
            <div>
                <nav className="navbar  bg-faded">
                    <a className="App-title navbar-brand">React Demo</a>
                </nav>
                <div className="container-fluid">
                    <Switch>
                        <Route exact path="/" component={Shell}/>
                        <Route path="/shell" component={Shell}/>
                        <Route path="/error" component={Error} />
                        <Redirect to="/error"/>
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
  }
}
