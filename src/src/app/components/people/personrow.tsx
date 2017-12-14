import * as React from 'react';
import './personrow.scss';
import {Person} from '../../models/person';

export class PersonRowProps {
    person: Person;
}

export class PersonRow extends React.Component<PersonRowProps, {}> {

    render() {
        return (
            <li>{this.props.person.nameFirst}</li>
        );
    }
}