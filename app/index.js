import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import reducer from './reducers';

import { Main } from '../app/blocks';

import './styles.css';
import './assets/fonts/fonts.css';

const store = createStore(reducer, composeWithDevTools());

const component = () => {
    render(
        <Provider store={store}>
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
            </Router>
        </Provider>,
        document.getElementById('app'),
    );
};

component();

if (module.hot) {
    module.hot.accept(() => {
        component();
    });
}
