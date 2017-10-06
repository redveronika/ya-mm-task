import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { convertMS } from '../../utils/shared.function';

import './show-stat.css';

class ShowStat extends Component {
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

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.time !== nextState.timeMounted;
    }

    componentDidUpdate() {
        if (this.props.time !== this.state.timeMounted) {
            this.setState({ timeMounted: this.props.time });
            this.countSessionTime();
        }
    }

    showCommonTime() {
        const { hours, minutes, seconds } = this.state.commonTime;
        return (
            <p>
                Общее время работы со страницей:
                { hours > 0 ? ` ${hours} ч` : null}
                { minutes > 0 ? ` ${minutes} мин` : null}
                { ` ${seconds} сек`}
            </p>
        );
    }

    countSessionTime() {
        const tabs = this.props.tabs.tabs.map((tab) => {
            let time = tab.sessionTime.reduce((sum, current) => {
                sum += current;
                return sum;
            }, 0);
            if (this.props.tabs.activeTab === tab.id) {
                time += this.props.time - this.props.app.activeTabOpen;
            }
            return {
                ...tab,
                sessionTime: convertMS(time),
            };
        });
        const commonTime = tabs.reduce((sum, current) => {
            sum.hours += current.sessionTime.hours;
            sum.minutes += current.sessionTime.minutes;
            sum.seconds += current.sessionTime.seconds;
            return sum;
        }, { hours: 0, minutes: 0, seconds: 0 });
        this.setState({ tabs, commonTime });
    }

    showTabTime(tab) {
        const { hours, minutes, seconds } = tab.sessionTime;
        return (
            <li className="show-stat__tabs-item" key={tab.id}>
                {`${tab.id} "${tab.title}":`}
                { hours > 0 ? ` ${hours} ч` : null}
                { minutes > 0 ? ` ${minutes} мин` : null}
                { ` ${seconds} сек` }
            </li>
        );
    }

    render() {
        return (
            <div className="show-stat">
                <div className="show-stat__common">{this.showCommonTime()}</div>
                <ul className="show-stat__tabs">
                    Детализация времени просмотра табов:
                    { this.state.tabs.map(tab => this.showTabTime(tab)) }
                </ul>
            </div>
        );
    }
}

ShowStat.propTypes = {
    app: PropTypes.object.isRequired,
    tabs: PropTypes.object.isRequired,
    time: PropTypes.number.isRequired,
};

export default connect(
    state => ({
        app: state.app,
        tabs: state.tabs,
    }),
)(ShowStat);
