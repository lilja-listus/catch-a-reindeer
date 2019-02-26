import React from 'react';
import './index.scss';
import ReactDOM from 'react-dom';

import { App } from './containers/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')

);

serviceWorker.unregister;