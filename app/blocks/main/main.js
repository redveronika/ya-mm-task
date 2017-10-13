import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Tabs, Rating, ProgressBar, ButtonTab, IconsList, Text, Console } from '../../blocks';

import './main.css';

// Функция обработки компонентов табов по фильтру в роуте.
const filterComponents = {
    rating: () => <Rating />,
    'progress-bar': () => <ProgressBar />,
    button: () => <ButtonTab />,
    'icons-list': () => <IconsList />,
    text: () => <Text />,
};

const Main = ({ filter, tabs }) => (
    <main className="main">
        <header className="main__header">
            <nav>
                <Tabs tabs={tabs} />
            </nav>
        </header>

        <section className="main__content">
            {/* Если в роуте указан фильтр, то вызываем компонент по значению этого фильтра. */}
            {
                Object.keys(filterComponents).includes(filter) ?
                    filterComponents[filter]() :
                    filterComponents['progress-bar']()
            }
        </section>

        <section className="command-window">
            <Console />

            <div className="command-window__description commands-description">
                <h3>Для ввода доступны следующие команды:</h3>
                <ul className="commands-description__list">
                    <li>selectTab(tabIndex) — выбор таба с индексом tabIndex</li>
                    <li>swapTabs(tabIndex1, tabIndex2) — поменять местами в DOM табы
                        tabIndex1 и tabIndex2</li>
                    <li>showStat() — показать статистику</li>
                    <li>setBest(maxStars) — установить максимальноё количество {'"звёздочек"'} рейтинга</li>
                    <li>setScore(score) — выставить рейтинг</li>
                    <li>setActiveColor(color) — установить активный цвет {'"звёздочек"'} рейтинга</li>
                    <li>setInactiveColor(color) — установить неактивный цвет {'"звёздочек"'} рейтинга</li>
                    <li>setProgress(progress) — установить значение прогресса в прогресс-баре.</li>
                </ul>
                <p>Команды выполняются по нажатию кнопки {'"Выполнить"'}
                    или клавиши {'"Enter"'}.</p>
                <p>Доступна навигация по истории последних 10
                    команд клавишами {'"↑"'} и {'"↓"'}.</p>
            </div>
        </section>
    </main>
);

Main.propTypes = {
    filter: PropTypes.string.isRequired,
    tabs: PropTypes.array.isRequired,
};

export default connect(
    state => ({
        tabs: state.tabs.tabs,
    }),
)(Main);
