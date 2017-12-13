import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import {Sidebar} from './sidebar';
import {BrowserRouter} from "react-router-dom";

jest.dontMock('./Sidebar');

enzyme.configure({ adapter: new Adapter() });

describe("SideBar", function() {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<BrowserRouter><Sidebar/></BrowserRouter>, div);
    });
});