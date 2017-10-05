import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Tabs, Rating, ProgressBar, Button, IconsList, Text, Console } from '../../blocks';

import './main.css';

const filterComponents = () => ({
    rating: () => <Rating />,
    'progress-bar': () => <ProgressBar />,
    button: () => <Button />,
    'icons-list': () => <IconsList />,
    text: () => <Text />,
});

const Main = ({ filter, tabs }) => (
    <main className="main">
        <header className="header">
            <Tabs tabs={tabs} />
        </header>
        <section className="content">
            { filter !== null && filterComponents()[filter]() }
        </section>
        <section className="command-window">
            <div className="command-window__description commands-description">
                <h3>Для ввода доступны следующие команды:</h3>
                <ul className="commands-description__list">
                    <li>selectTab(tabIndex) — выбор таба с индексом tabIndex</li>
                    <li>swapTabs(tabIndex1, tabIndex2) — поменять местами в DOM табы
                    tabIndex1 и tabIndex2</li>
                    <li>showStat() — показать статистику</li>
                </ul>
                <p>Команды выполняются по нажатию кнопки {'"Выполнить"'}
                     или клавиши {'"Enter"'}.</p>
                <p>Доступна навигация по истории последних 10
                    команд клавишами {'"↑"'} и {'"↓"'}.</p>
            </div>
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
