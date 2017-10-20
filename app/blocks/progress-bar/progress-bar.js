import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setSessionTime } from '../../reducers/tabs.reducer';

import './progress-bar.css';

class ProgressBar extends Component {
    componentWillUnmount() {
        const time = Date.now();
        // Добавляем время текущей сессии на данной вкладке в стор.
        this.props.setSessionTime('progress-bar', time - this.props.activeTabOpenTime);
    }

    render() {
        const { progress } = this.props.progress;
        return (
            <div className="progress-bar" >
                <span className="progress-bar__text">{progress}%</span>
                <div className="progress-bar__inner" style={{ width: `${progress}%` }} />
            </div>
        );
    }
}


ProgressBar.propTypes = {
    setSessionTime: PropTypes.func.isRequired,
    activeTabOpenTime: PropTypes.any,
    progress: PropTypes.object.isRequired,
};

ProgressBar.defaultProps = {
    activeTabOpenTime: 0,
};

export default connect(
    state => ({
        activeTabOpenTime: state.tabs.activeTabOpenTime,
        progress: state.progress,
    }),
    { setSessionTime },
)(ProgressBar);
