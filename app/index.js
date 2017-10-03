import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Main from '../app/blocks/main/main';

const component = () => {
    render(
        <Router>
            <Route path="/" component={Main} />
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
