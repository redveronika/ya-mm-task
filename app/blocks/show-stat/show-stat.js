import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { PARSE_DATE } from '../../utils/shared.function';

import './show-stat.css';

class ShowStat extends Component {
    constructor(props) {
        super(props);

        this.state = {
            commonSessionTime: {},
            timeMounted: null,
        };

        this.showCommonTime = this.showCommonTime.bind(this);
        this.showTabTime = this.showTabTime.bind(this);
    }

    componentWillMount() {
        this.setState({ timeMounted: this.props.time });
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.time !== nextState.timeMounted;
    }

    componentDidUpdate() {
        if (this.props.time !== this.state.timeMounted) {
            this.setState({ timeMounted: this.props.time });
        }
    }

    showCommonTime() {
        const commonSessionTime = new Date().valueOf() - this.props.app.openApp;
        const { hours, minutes, seconds } = PARSE_DATE(commonSessionTime);
        return (
            <p>
                Общее время работы со страницей:
                { hours > 0 ? ` ${hours} ч` : null}
                { minutes > 0 ? ` ${minutes} мин` : null}
                { seconds > 0 ? ` ${seconds} сек` : null}
            </p>
        );
    }

    showTabTime(tab) {
        let time = tab.sessionTime.reduce((sum, current) => {
            sum += current;
            return sum;
        }, 0);
        if (this.props.tabs.activeTab === tab.id) {
            time += new Date().valueOf() - this.props.app.activeTabOpen;
        }
        const { hours, minutes, seconds } = PARSE_DATE(time);
        return (
            (hours > 0 || minutes > 0 || seconds > 0) ?
                <li className="show-stat__tabs-item" key={tab.id}>
                    {`${tab.id} "${tab.title}":`}
                    { hours > 0 ? ` ${hours} ч` : null}
                    { minutes > 0 ? ` ${minutes} мин` : null}
                    { seconds > 0 ? ` ${seconds} сек` : null}
                </li> :
                null
        );
    }

    render() {
        const { tabs } = this.props.tabs;
        return (
            <div className="show-stat">
                <div className="show-stat__common">{this.showCommonTime()}</div>
                <ul className="show-stat__tabs">
                    Детализация времени просмотра табов:
                    { tabs.map(tab => this.showTabTime(tab)) }
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

