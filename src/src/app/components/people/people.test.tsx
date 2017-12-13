import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import {People} from './people';

jest.dontMock('./People');

enzyme.configure({ adapter: new Adapter() });

describe("People", function() {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<People/>, div);
    });
});