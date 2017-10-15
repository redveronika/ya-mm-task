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
        <div className="main__wrapper">
            <header className="header">
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
                <div className="command-window__console">
                    <Console />
                </div>

                <div className="command-window__description">
                    <div className="commands-description">
                        <div className="commands-description__wrapper">
                            <h3>Для ввода доступны следующие команды:</h3>
                            <ul className="commands-description__list">
                                <li>
                                    <code className="commands-description__code">selectTab(tabIndex)</code>
                                    — выбор таба с индексом tabIndex.
                                </li>
                                <li>
                                    <code className="commands-description__code">swapTabs(tabIndex1, tabIndex2)</code>
                                    — поменять местами в DOM табы
                                    tabIndex1 и tabIndex2.
                                </li>
                                <li>
                                    <code className="commands-description__code">showStat()</code>
                                    — показать статистику.
                                </li>
                                <li>
                                    <code className="commands-description__code">setBest(maxStars)</code>
                                    — установить максимальное количество {'«звёздочек»'} рейтинга.
                                </li>
                                <li>
                                    <code className="commands-description__code">setScore(score)</code>
                                    — выставить рейтинг.
                                </li>
                                <li>
                                    <code className="commands-description__code">setActiveColor(HEX)</code>
                                    — установить активный цвет {'«звёздочек»'} рейтинга.
                                </li>
                                <li>
                                    <code className="commands-description__code">setInactiveColor(HEX)</code>
                                    — установить неактивный цвет {'«звёздочек»'} рейтинга.
                                </li>
                                <li>
                                    <code className="commands-description__code">setProgress(progress)</code>
                                    — установить значение прогресса в прогресс-баре.
                                </li>
                            </ul>
                            <p>Команды выполняются по нажатию кнопки {'«Выполнить»'}
                                или клавиши {'«Enter»'}.</p>
                            <p>Доступна навигация по истории последних 10
                                команд клавишами {'«↑»'} и {'«↓»'}.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
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
