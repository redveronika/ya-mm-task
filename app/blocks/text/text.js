import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setSessionTime } from '../../reducers/tabs.reducer';
import { setActiveTabOpenTime } from '../../reducers/app.reducer';

import './text.css';

class Text extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timeOpened: null,
        };
    }

    componentWillMount() {
        const { time } = this.props.history.location;
        this.setState({ timeOpened: time });
        this.props.setActiveTabOpenTime(this.props.history.location.time);
    }

    componentWillUnmount() {
        const timeClosed = new Date().valueOf();
        this.props.setSessionTime('text', timeClosed - this.state.timeOpened);
    }

    render() {
        return (
            <p>Text</p>
        );
    }
}


Text.propTypes = {
    setSessionTime: PropTypes.func.isRequired,
    setActiveTabOpenTime: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
};

export default connect(
    null,
    { setSessionTime, setActiveTabOpenTime },
)(withRouter(Text));

