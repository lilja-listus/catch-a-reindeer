import React from 'react';
import './index.scss';
import ReactDOM from 'react-dom';

import App from './containers/HomePage';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
    <App />, document.getElementById('root')
);

serviceWorker.unregister;