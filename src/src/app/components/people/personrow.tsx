import * as React from 'react';
import './personrow.scss';
import {Person} from '../../models/person';
import {BrowserRouter, Link} from 'react-router-dom';

export class PersonRowProps {
    person: Person;
}

export class PersonRow extends React.Component<PersonRowProps, {}> {

    render() {
        return (
            <li><BrowserRouter>
                <Link id="personLink" to={`/shell/persondetail/${this.props.person.id}`}>
                    {this.props.person.nameFirst} {this.props.person.nameLast}
                </Link>
            </BrowserRouter></li>
        );
    }
}