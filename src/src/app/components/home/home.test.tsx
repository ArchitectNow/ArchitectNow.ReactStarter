import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import {Home} from './home';
import {Person} from "../../models/person";

jest.dontMock('./Home');

enzyme.configure({ adapter: new Adapter() });

describe('Home', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Home/>, div);
    });

    it('does some cool stuff', () => {
        //expect(true).toEqual(false);
    });

    it('returns what I expect',() => {
        var p = new Person();

        p.nameLast = "Kevin";

        expect(p.nameLast).toEqual("Kevin");
    });
});
