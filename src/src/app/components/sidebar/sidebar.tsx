import * as React from 'react';
import './sidebar.scss';
import {BrowserRouter, Link} from 'react-router-dom';

export class Sidebar extends React.Component {

    render() {

        return (
            <div>
                <BrowserRouter>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to={'/shell/home'} className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/shell/people'} className="nav-link">People</Link>
                        </li>

                    </ul>
                </BrowserRouter>
            </div>
        );
    }
}
