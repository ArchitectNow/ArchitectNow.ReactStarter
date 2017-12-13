import * as React from 'react';
import './sidebar.scss';
import {Link} from 'react-router-dom';

export class Sidebar extends React.Component {

    render() {
        return (
            <nav className="navbar" role="navigation">
                <ul className="nav nav-pills nav-stacked">
                    <li><Link to={'/home'}>Home</Link></li>
                    <li><Link to={'/people'}>People</Link></li>
                </ul>
            </nav>
        );
    }
}
