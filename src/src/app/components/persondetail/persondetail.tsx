import * as React from 'react';
import './persondetail.scss';
import {Person} from '../../models/person';

export class PersonDetailState {
    person: Person;
}

export class PersonDetail extends React.Component<{}, PersonDetailState> {

    constructor(props:{}) {
        super(props);
    }

    componentWillMount() {
        this.setState({person: new Person()});
    }

    render() {
        return (
            <div>
                <h2>Person Detail</h2>
                <div/>
            </div>
        );
    }
}