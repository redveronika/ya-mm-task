import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setSessionTime } from '../../reducers/tabs.reducer';

import './progress-bar.css';

class ProgressBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timeOpened: null,
        };
    }

    componentDidMount() {
        const time = new Date().valueOf();
        this.setState({ timeOpened: time });
    }

    componentWillUnmount() {
        const time = new Date().valueOf();
        this.props.setSessionTime('progress-bar', time - this.state.timeOpened);
    }

    render() {
        return (
            <p>ProgressBar</p>
        );
    }
}


ProgressBar.propTypes = {
    setSessionTime: PropTypes.func.isRequired,
};

export default connect(
    null,
    { setSessionTime },
)(ProgressBar);

