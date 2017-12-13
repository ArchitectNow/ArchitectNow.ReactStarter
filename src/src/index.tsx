import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './app/components/App';
import registerServiceWorker from './registerServiceWorker';
import './scss/main.scss';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render((
    <BrowserRouter>
        <App/>
    </BrowserRouter>
),
    document.getElementById('root'));

registerServiceWorker();
