import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setSessionTime } from '../../reducers/tabs.reducer';
import { setActiveTabOpenTime } from '../../reducers/app.reducer';

import './button.css';

class Button extends Component {
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
        const time = new Date().valueOf();
        this.props.setSessionTime('button', time - this.state.timeOpened);
    }

    render() {
        return (
            <p>Button</p>
        );
    }
}


Button.propTypes = {
    setSessionTime: PropTypes.func.isRequired,
    setActiveTabOpenTime: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
};

export default connect(
    null,
    { setSessionTime, setActiveTabOpenTime },
)(withRouter(Button));

