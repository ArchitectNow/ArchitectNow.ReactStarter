import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './App';
import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import {BrowserRouter} from "react-router-dom";

jest.dontMock('./App');

enzyme.configure({ adapter: new Adapter() });

describe("App", function() {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, div);
    });

    it('renders the correct name', () => {

        const contents = enzyme.shallow(<App />);

        expect(contents.find('.App-title').text()).toEqual("React Demo");
    })
});