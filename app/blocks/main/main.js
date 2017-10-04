import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Tabs, Rating, ProgressBar, Button, IconsList, Text, Console } from '../../blocks';

import './main.css';

const filterComponents = {
    rating: () => <Rating />,
    'progress-bar': () => <ProgressBar />,
    button: () => <Button />,
    'icons-list': () => <IconsList />,
    text: () => <Text />,
};

const Main = ({ filter, tabs }) => (
    <main className="main">
        <header className="header">
            <Tabs tabs={tabs} />
        </header>
        <section className="content">
            { filter !== null && filterComponents[filter]() }
        </section>
        <section className="command-window">
            <Console />
        </section>
    </main>
);

Main.propTypes = {
    filter: PropTypes.string,
    tabs: PropTypes.array.isRequired,
};

Main.defaultProps = {
    filter: null,
};

export default connect(
    state => ({
        tabs: state.tabs.tabs,
    }),
)(Main);
