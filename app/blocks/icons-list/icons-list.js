import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setSessionTime, setActiveTabOpenTime } from '../../reducers/tabs.reducer';

import './icons-list.css';

class IconsList extends Component {
    componentWillMount() {
        this.props.setActiveTabOpenTime(this.props.history.location.time);
    }

    componentWillUnmount() {
        const time = new Date().valueOf();
        this.props.setSessionTime('icons-list', time - this.props.activeTabOpenTime);
    }

    render() {
        return (
            <p>IconsList</p>
        );
    }
}


IconsList.propTypes = {
    setSessionTime: PropTypes.func.isRequired,
    setActiveTabOpenTime: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    activeTabOpenTime: PropTypes.any,
};

IconsList.defaultProps = {
    activeTabOpenTime: 0,
};

export default connect(
    state => ({
        activeTabOpenTime: state.tabs.activeTabOpenTime,
    }),
    { setSessionTime, setActiveTabOpenTime },
)(withRouter(IconsList));
