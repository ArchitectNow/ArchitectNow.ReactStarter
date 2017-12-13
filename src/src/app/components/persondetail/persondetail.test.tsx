import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import {BrowserRouter} from "react-router-dom";
import {PersonDetail} from './persondetail';

jest.dontMock('./persondetail');

enzyme.configure({ adapter: new Adapter() });

describe("PersonDetail", function() {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<BrowserRouter><PersonDetail/></BrowserRouter>, div);
    });
});