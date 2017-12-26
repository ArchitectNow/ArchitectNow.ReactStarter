import * as React from 'react';
import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import {BrowserRouter} from "react-router-dom";
import {PersonDetail} from './persondetail';

jest.dontMock('./persondetail');

enzyme.configure({ adapter: new Adapter() });

describe("PersonDetail", function() {
    it('renders without crashing', () => {

        enzyme.shallow(
            (<BrowserRouter>
                <PersonDetail/>
            </BrowserRouter>),{ context: { props: { match: { params: "123 "}}}});
    });

    it('renders renders the correct info', () => {

        var contents = enzyme.shallow(
            (<BrowserRouter>
                <PersonDetail/>
            </BrowserRouter>),{ context: { props: { match: { params: "123"}}}});

        expect(contents.contains("123"));
    });

    it('has the correct state', () => {

        var contents = enzyme.shallow(
            (<BrowserRouter>
                <PersonDetail/>
            </BrowserRouter>),{ context: { props: { match: { params: "123"}}}});

        var personDetail = contents.find(PersonDetail);

        console.log(personDetail.state);
        var person = personDetail.state().person;

        expect(person.id).toEqual(('123'));
    });
});