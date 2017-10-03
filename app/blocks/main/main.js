import React from 'react';
import PropTypes from 'prop-types';

import { Tabs, Rating, ProgressBar, Console } from '../../blocks';

import './main.css';

const tabs = [
    {
        id: 1,
        title: 'Прогресс бар',
        linkTo: '/main/progress-bar',
    },
    {
        id: 2,
        title: 'Рейтинг',
        linkTo: '/main/rating',
    },
];

const filterComponents = {
    rating: () => <Rating />,
    'progress-bar': () => <ProgressBar />,
};

const Main = ({ filter }) => (
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
};

Main.defaultProps = {
    filter: null,
};

export default Main;
