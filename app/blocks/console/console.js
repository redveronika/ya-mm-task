import React, { Component } from 'react';

import './console.css';

class Console extends Component {
    render() {
        return (
            <div className="console command-window__container">
                <div className="console-window">
                    <div className="console-window__placeholder">
                        <h3>Для ввода доступны следующие команды:</h3>
                        <ul className="console-window__placeholder-list">
                            <li>selectTab(tabIndex) — выбор таба с индексом tabIndex</li>
                            <li>swapTabs(tabIndex1, tabIndex2) — поменять местами в DOM табы
                                tabIndex1 и tabIndex2</li>
                            <li>showStat() — показать статистику</li>
                        </ul>
                    </div>
                </div>
                <form className="console-form">
                    <input type="text" className="console-form__input" />
                    <input type="submit" className="console-form__submit" value="Выполнить" />
                </form>
            </div>
        );
    }
}

export default Console;

