import * as React from 'react';
import './App.scss';
import {Redirect, Route, Switch} from 'react-router';
import {Error} from './error/error';
import {Shell} from './shell/shell';
import {Link} from 'react-router-dom';

export class App extends React.Component {

  render() {
    return (
        <div>
            <nav className="navbar navbar-fixed-top navbar-light bg-faded">
                <a className="navbar-brand">React Demo</a>

                    <ul className="navbar-nav">
                        <li className="nav-item"><Link to={'/shell/home'} className="nav-link">Home</Link></li>
                        <li className="nav-item"><Link to={'/error'} className="nav-link">Error</Link></li>
                    </ul>

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
    );
  }
}
