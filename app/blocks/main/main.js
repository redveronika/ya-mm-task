import React from 'react';
import PropTypes from 'prop-types';

import { Tabs, Rating, ProgressBar, Button, IconsList, Text, Console } from '../../blocks';

import './main.css';

const tabs = [
    {
        id: 1,
        title: 'Прогресс-бар',
        linkTo: '/main/progress-bar',
    },
    {
        id: 2,
        title: 'Рейтинг',
        linkTo: '/main/rating',
    },
    {
        id: 3,
        title: 'Кнопка',
        linkTo: '/main/button',
    },
    {
        id: 4,
        title: 'Список иконок',
        linkTo: '/main/icons-list',
    },
    {
        id: 5,
        title: 'Текст',
        linkTo: '/main/text',
    },
];

const filterComponents = {
    rating: () => <Rating />,
    'progress-bar': () => <ProgressBar />,
    button: () => <Button />,
    'icons-list': () => <IconsList />,
    text: () => <Text />,
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
