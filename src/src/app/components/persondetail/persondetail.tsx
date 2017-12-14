import * as React from 'react';
import './persondetail.scss';
import {Person} from '../../models/person';

export class PersonDetailState {
    person: Person;
}

export class PersonDetail extends React.Component<{match?: any}, PersonDetailState> {

    constructor(props:{match: any}) {
        super(props);
    }

    componentWillMount() {
        this.setState({person: new Person()});
    }

    componentDidMount() {
        const id = this.props.match.params.id;

        const person = new Person();
        person.id = id;

        this.setState({person: person});
    }

    render() {
        return (
            <div>
                <h2>Person Detail</h2>
                <div>
                    Id: {this.state.person.id}
                </div>
            </div>
        );
    }
}