import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Tabs, Rating, ProgressBar, Button, IconsList, Text, Console } from '../../blocks';
import { setAppOpenTime } from '../../reducers/app.reducer';

import './main.css';

const filterComponents = {
    rating: () => <Rating time={new Date().valueOf()} />,
    'progress-bar': () => <ProgressBar time={new Date().valueOf()} />,
    button: () => <Button time={new Date().valueOf()} />,
    'icons-list': () => <IconsList time={new Date().valueOf()} />,
    text: () => <Text time={new Date().valueOf()} />,
};

class Main extends Component {
    componentWillMount() {
        //this.props.setAppOpenTime(new Date().valueOf());
    }

    render() {
        const { filter, tabs } = this.props;
        return (
            <main className="main">
                <header className="header">
                    <Tabs tabs={tabs} />
                </header>
                <section className="content">
                    { filter !== null && filterComponents[filter]() }
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
                        <p>Команды выполняются по нажатию кнопки "Выполнить"
                             или клавиши "Enter".</p>
                        <p>Доступна навигация по истории последних 10
                            комманд клавишами "↑" и "↓".</p>
                    </div>
                    <Console />
                </section>
            </main>
        );
    }
}

Main.propTypes = {
    filter: PropTypes.string,
    tabs: PropTypes.array.isRequired,
    setAppOpenTime: PropTypes.func.isRequired,
};

Main.defaultProps = {
    filter: null,
};

export default connect(
    state => ({
        tabs: state.tabs.tabs,
    }),
    { setAppOpenTime },
)(Main);
