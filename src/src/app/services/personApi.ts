import {Person} from '../models/person';

export class PersonApi {

    private apiUrl = 'http://architectnow-personapi.azurewebsites.net/api/personapi';

    constructor() {

    }

    getPeople(someParam: number): Promise<Person[]> {

        return fetch(this.apiUrl, { method: 'get'}).then(resp => {
            return resp.json();
        }).then(json => {
           return <Person[]>json;
        });
    }
}