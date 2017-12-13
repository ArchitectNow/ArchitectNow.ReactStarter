import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import {Home} from './home';

jest.dontMock('./Home');

enzyme.configure({ adapter: new Adapter() });

describe("Home", function() {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Home/>, div);
    });
});