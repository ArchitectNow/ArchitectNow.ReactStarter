import * as React from 'react';
import './shell.scss';
import {Home} from '../home/home';
import {People} from '../people/people';
import {Sidebar} from '../sidebar/sidebar';
import {Route, Switch} from 'react-router';

export class Shell extends React.Component {

    render() {
        return (
            <div className="row">
                <div className="col-3 sidebar bg-faded">
                    <Sidebar/>
                </div>
                <div className="col">
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/home" component={Home} />
                        <Route path="/people" component={People} />
                    </Switch>
                </div>
            </div>
        );
    }
}