import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension/developmentOnly';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import reducer from './reducers';

import { Main } from '../app/blocks';

import './styles.css';
import './assets/fonts/fonts.css';

const store = createStore(reducer, devToolsEnhancer());

const component = () => {
    const pathArr = location.pathname.split('/');
    const basename = pathArr[pathArr.length - 2] || 'main';
    render(
        <Provider store={store}>
            <Router basename={`/${basename}`}>
                <Route
                    path="/:filter?"
                    render={({ match }) => {
                        if (typeof match.params.filter === 'undefined') {
                            return <Redirect to="/progress-bar" />;
                        }
                        return <Main filter={match.params.filter} />;
                    }}
                />
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
