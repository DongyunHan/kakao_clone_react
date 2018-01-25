import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainPage from './component/Main/index';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MainPage />, document.getElementById('root'));
registerServiceWorker();
