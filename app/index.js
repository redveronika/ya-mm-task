import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension/developmentOnly';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import reducer from './reducers';

import { Main } from '../app/blocks';

import './styles.css';
import './assets/fonts/fonts.css';

const store = createStore(reducer, devToolsEnhancer());

const component = () => {
    render(
        <Provider store={store}>
            <Router>
                <Switch>
                    <Redirect exact from="/ya-mm-task" to="/ya-mm-task/progress-bar" />
                    { location.href.includes('localhost') ?
                        <Redirect from="/ya-mm-task/dist" to="/ya-mm-task/progress-bar" />
                        : null
                    }
                    <Route
                        path="/ya-mm-task/:filter?"
                        render={({ match }) => (
                            <Main filter={match.params.filter} />
                        )}
                    />
                    <Redirect from="/" to="/ya-mm-task/progress-bar" />
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
