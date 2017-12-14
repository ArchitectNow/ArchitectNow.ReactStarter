import * as React from 'react';
import './shell.scss';
import {Home} from '../home/home';
import {People} from '../people/people';
import {Sidebar} from '../sidebar/sidebar';
import {Error} from '../error/error';
import {Redirect, Route, Switch} from 'react-router';
import {PersonDetail} from '../persondetail/persondetail';

export class Shell extends React.Component {

    render() {
        return (
            <div className="row">
                <div className="col-3 sidebar bg-faded">
                    <Sidebar/>
                </div>
                <div className="col">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <Switch>
                                    <Route path="/shell/home" component={Home} />
                                    <Route path="/shell/people" component={People} />
                                    <Route path="/shell/persondetail/:id" component={PersonDetail} />
                                    <Route path="/shell/error" component={Error} />
                                    <Redirect to="/shell/error"/>
                                </Switch>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}