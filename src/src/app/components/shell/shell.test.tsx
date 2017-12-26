import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Shell} from './shell';
import {BrowserRouter} from 'react-router-dom';

jest.dontMock('./Shell');

enzyme.configure({ adapter: new Adapter() });

describe("Shell", function() {
    it('renders without crashing', () => {
       const div = document.createElement('div');
        ReactDOM.render(<BrowserRouter><Shell/></BrowserRouter>, div);
    });
});