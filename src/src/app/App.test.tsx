import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('is true', () => {
    const contents = enzyme.shallow(<App />);

    expect(contents.find('.App-title').text()).toEqual('Welcome to the ArchitectNow.ReactStarter');
});