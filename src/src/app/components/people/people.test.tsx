import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as enzyme from 'enzyme';
import {People} from './people';
import Adapter from 'enzyme-adapter-react-16';

jest.dontMock('./people');
jest.mock('../../services/personApi');

enzyme.configure({adapter: new Adapter()});

describe('People', function () {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<People />, div);
    });
});