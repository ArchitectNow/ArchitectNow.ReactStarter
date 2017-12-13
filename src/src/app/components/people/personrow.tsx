import * as React from 'react';
import './home.scss';
import {Person} from '../../models/person';

export class PersonRow extends React.Component<Person,any> {

    render() {
        return (
            <li>{ this.props.nameFirst }</li>
        );
    }
}