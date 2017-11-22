import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { convertMS } from '../../utils/shared.function';

import './show-stat.css';

import whiskyPour from '../../assets/imgs/whisky-pour.gif';

class ShowStat extends Component {
    // Отвечает за отображение времени проведённого на каждом табе.
    static showTabTime(tab) {
        const { hours, minutes, seconds } = tab.sessionTime;
        return (
            <li className="show-stat__tabs-item" key={tab.id}>
                {`${tab.id} "${tab.title}":`}
                {hours > 0 ? ` ${hours} ч` : null}
                {minutes > 0 ? ` ${minutes} мин` : null}
                {` ${seconds} сек`}
            </li>
        );
    }

    constructor(props) {
        super(props);

        this.state = {
            commonSessionTime: {},
            timeMounted: null,
        };

        this.countSessionTime = this.countSessionTime.bind(this);
        this.showCommonTime = this.showCommonTime.bind(this);
        this.showTabTime = this.showTabTime.bind(this);
    }

    componentWillMount() {
        this.setState({ timeMounted: this.props.time });
        this.countSessionTime();
    }

    // Считаем, что компонент нужно перерендерить,
    // если время вызова компонента в параметрах изменилось.
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.time !== nextState.timeMounted;
    }

    componentDidUpdate() {
        // Вызываем функцию только, если время в параметрах изменилось.
        if (this.props.time !== this.state.timeMounted) {
            this.setState({ timeMounted: this.props.time });
            this.countSessionTime();
        }
    }

    // Отвечает за отображение общего времени работы с приложением.
    showCommonTime() {
        const { hours, minutes, seconds } = this.state.commonTime;
        return (
            <p>
                Общее время работы со страницей:
                {hours > 0 ? ` ${hours} ч` : null}
                {minutes > 0 ? ` ${minutes} мин` : null}
                {` ${seconds} сек`}
            </p>
        );
    }

    countSessionTime() {
        // Проходим по всем табам приложения.
        let commonTimeMS = 0;
        const tabs = this.props.tabs.tabs.map((tab) => {
            // Определяем сумму всех сессий для каждого таба.
            let time = tab.sessionTime.reduce((sum, current) => {
                sum += current;
                return sum;
            }, 0);

            // Если таб активный, то находим текущее время сессии:
            // вычитаем из текущего времени время захода на вкладку.
            if (this.props.tabs.activeTab === tab.id) {
                time += this.props.time - this.props.tabs.activeTabOpenTime;
            }

            // Считаем общее время работы с приложением: суммируем время на всех вкладках в мс.
            commonTimeMS += time;

            // Для конкретного таба перезаписываем время сессии
            // уже в часах, минутах и секундах.
            // Добавляем изменённый таб в новый массив.
            return {
                ...tab,
                sessionTime: convertMS(time),
            };
        });

        // Сохраняем в state время в человекочитаемом формате.
        this.setState({ tabs, commonTime: convertMS(commonTimeMS) });
    }

    render() {
        return (
            <div className="show-stat">
                <div className="show-stat__common">{this.showCommonTime()}</div>
                <ul className="show-stat__tabs">
                    Детализация времени просмотра табов:
                    {this.state.tabs.map(tab => this.showTabTime(tab))}
                </ul>
                <img src={whiskyPour} alt="Pouring whisky in glass" />
            </div>
        );
    }
}

ShowStat.propTypes = {
    tabs: PropTypes.object.isRequired,
    time: PropTypes.number.isRequired,
};

export default connect(
    state => ({
        tabs: state.tabs,
    }),
)(ShowStat);
