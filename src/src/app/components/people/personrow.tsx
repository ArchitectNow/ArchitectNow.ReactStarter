import * as React from 'react';
import './personrow.scss';
// import {Person} from '../../models/person';

export class PersonRow extends React.Component<any, any> {

    render() {
        return (
            <li>{this.props.person.nameFirst}</li>
        );
    }
}