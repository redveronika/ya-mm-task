import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Main } from '../app/blocks';

import './styles.css';
import './assets/fonts/fonts.css';

const component = () => {
    render(
        <Router>
            <Switch>
                <Route path="/" component={Main} />
            </Switch>
        </Router>,
        document.getElementById('app'),
    );
};

component();

if (module.hot) {
    module.hot.accept(() => {
        component();
    });
}
