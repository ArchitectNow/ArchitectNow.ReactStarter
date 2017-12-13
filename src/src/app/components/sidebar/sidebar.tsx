import * as React from 'react';
import './sidebar.scss';
import {Link} from 'react-router-dom';

export class Sidebar extends React.Component {

    render() {

        return (

            <div>
                <ul className="navbar-nav">

                    <li className="nav-item">
                        <Link to={'/shell/home'} className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/shell/people'} className="nav-link">People</Link>
                    </li>

                </ul>
            </div>
        );
    }
}
