import React from 'react';
import PropTypes from 'prop-types';

import './help.css';

const Help = ({ message }) => (
    <div className="help">
        <h4 className="help__message">{message}</h4>
        <div className="help__wrapper">
            <h3>Для ввода доступны следующие команды:</h3>
            <ul className="help__list">
                <li>
                    <code className="help__code">selectTab(tabIndex)</code>
                    — выбор таба с индексом tabIndex.
                </li>
                <li>
                    <code className="help__code">swapTabs(tabIndex1, tabIndex2)</code>
                    — поменять местами в DOM табы
                    tabIndex1 и tabIndex2.
                </li>
                <li>
                    <code className="help__code">showStat()</code>
                    — показать статистику.
                </li>
                <li>
                    <code className="help__code">setBest(maxStars)</code>
                    — установить максимальное количество {'«звёздочек»'} рейтинга.
                </li>
                <li>
                    <code className="help__code">setScore(score)</code>
                    — выставить рейтинг.
                </li>
                <li>
                    <code className="help__code">setActiveColor(HEX)</code>
                    — установить активный цвет {'«звёздочек»'} рейтинга.
                </li>
                <li>
                    <code className="help__code">setInactiveColor(HEX)</code>
                    — установить неактивный цвет {'«звёздочек»'} рейтинга.
                </li>
                <li>
                    <code className="help__code">setProgress(progress)</code>
                    — установить значение прогресса в прогресс-баре.
                </li>
            </ul>
            <p>Команды выполняются по нажатию кнопки {'«Выполнить»'}
                или клавиши {'«Enter»'}.</p>
            <p>Доступна навигация по истории последних 10
                команд клавишами {'«↑»'} и {'«↓»'}.</p>
        </div>
    </div>
);

Help.propTypes = {
    message: PropTypes.string,
};

Help.defaultProps = {
    message: '',
};

export default Help;
