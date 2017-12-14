import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './app/components/App';
import registerServiceWorker from './registerServiceWorker';
import './scss/main.scss';
import 'promise/polyfill';

ReactDOM.render((
    <App/>
),
    document.getElementById('root'));

registerServiceWorker();
