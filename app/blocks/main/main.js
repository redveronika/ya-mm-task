import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Tabs, Rating, ProgressBar, ButtonTab, IconsList, Text, Console, Help } from '../../blocks';

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
                    <Help />
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
