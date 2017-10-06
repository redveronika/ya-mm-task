import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setSessionTime, setActiveTabOpenTime } from '../../reducers/tabs.reducer';

import './progress-bar.css';

class ProgressBar extends Component {
    componentWillMount() {
        this.props.setActiveTabOpenTime(this.props.history.location.time);
    }

    componentWillUnmount() {
        const time = new Date().valueOf();
        this.props.setSessionTime('progress-bar', time - this.props.activeTabOpenTime);
    }

    render() {
        const { width, height, progress } = this.props.progress;
        const styles = {
            width: `${width}px`,
            height: `${height}px`,
        };
        const innerStyles = {
            width: `${progress}%`,
        };
        return (
            <div className="progress-bar" style={styles} >
                <span className="progress-bar__text">{progress}%</span>
                <div className="progress-bar__inner" style={innerStyles}></div>
            </div>
        );
    }
}


ProgressBar.propTypes = {
    setSessionTime: PropTypes.func.isRequired,
    setActiveTabOpenTime: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
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
    { setSessionTime, setActiveTabOpenTime },
)(withRouter(ProgressBar));
