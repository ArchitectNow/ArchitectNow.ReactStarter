import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import {PersonRow} from './personrow';
import {Person} from '../../models/person';

jest.dontMock('./PersonRow');
jest.dontMock('react-router-dom');

enzyme.configure({ adapter: new Adapter() });

describe("PersonRow", function() {
    it('renders without crashing', () => {
        const person = new Person();
        person.nameFirst = "Kevin";
        person.nameLast = "G";
        person.id = "123";

        const div = document.createElement('div');
        ReactDOM.render(<PersonRow key={person.id} person={person}/>, div);
    });

    it('renders the correct name', () => {

        const person = new Person();
        person.nameFirst = "Kevin";
        person.nameLast = "G";
        person.id = "123";

        const contents = enzyme.render(<PersonRow key={person.id} person={person}/>);

        expect(contents.find('#personLink').text()).toEqual("Kevin G");
    })
});