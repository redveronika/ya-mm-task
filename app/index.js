import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { Main } from '../app/blocks';

import './styles.css';
import './assets/fonts/fonts.css';

const component = () => {
    render(
        <Router>
            <Switch>
                <Route
                    path="/main/:filter?"
                    render={({ match }) => (
                        <Main filter={match.params.filter} />
                    )}
                />
                <Redirect from="/" to="/main" />
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
