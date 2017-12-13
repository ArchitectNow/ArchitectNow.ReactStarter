import * as React from 'react';
import './people.scss';
import {PersonApi} from '../../services/personApi';
import {Person} from '../../models/person';
import {PersonRow} from "./personrow";

export class People extends React.Component {

    private people: Person[];

    componentDidMount() {
        const personApi = new PersonApi();

        personApi.getPeople(12).then(data => {
           this.people = data;

           console.log(`Retrieved ${ this.people.length } people`);
        }).catch(err => {
            console.log(err);
        });
    }

    render() {

        const personRows = this.people ? this.people.map(x => <PersonRow person={x}/>)

        return (
            <div>
                <h2>People</h2>
            </div>
        );
    }
}