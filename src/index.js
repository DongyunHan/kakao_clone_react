import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

//import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import MainPage from './component/Main/index';
import MainMain from './component/Main/body';
import Profile from './component/Profile/profile';

ReactDOM.render(
    <Router>
        <div>
            <MainPage />
            <Route exact path='/' component={MainMain} />
            <Route path='/profile' component={Profile} />
                {/*
                    add other components
                */}

        </div>
    </Router>,
    document.getElementById('root'));
registerServiceWorker();
