import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import {Error} from './error';

jest.dontMock('./Error');

enzyme.configure({ adapter: new Adapter() });

describe("Error", function() {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Error/>, div);
    });
});