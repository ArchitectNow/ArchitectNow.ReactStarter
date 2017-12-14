import * as React from 'react';
import './people.scss';
import {PersonApi} from '../../services/personApi';
import {Person} from '../../models/person';
import {PersonRow} from './personrow';
import {observer} from "mobx-react";

class PeopleState {
    people: Person[];
}

@observer
export class People extends React.Component<any,PeopleState> {

    constructor(props: any) {
        super(props);
        this.setState({people: []});
    }

    componentDidMount() {
        const personApi = new PersonApi();

        personApi.getPeople(12).then(data => {
           this.setState({people: data });

           console.log(`Retrieved ${ this.state.people.length } people`);
        }).catch(err => {
            console.log(err);
        });
    }

    render() {

        const personRows = this.state ?
            this.state.people.map(x => {
                return (
                    <PersonRow key={x.id} person={x}/>
                );
            }) : [];

        return (
            <div>
                <h2>People</h2>
                <ul>
                    {personRows}
                </ul>
            </div>
        );
    }

    onReset() {

    }
}