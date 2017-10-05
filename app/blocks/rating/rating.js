import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setSessionTime } from '../../reducers/tabs.reducer';
import { setActiveTabOpenTime } from '../../reducers/app.reducer';

import './rating.css';

class Rating extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timeOpened: null,
        };
    }

    componentWillMount() {
        this.setState({ timeOpened: this.props.time });
        this.props.setActiveTabOpenTime(this.props.history.location.time);
    }

    componentWillUnmount() {
        const time = new Date().valueOf();
        this.props.setSessionTime('rating', time - this.state.timeOpened);
    }

    render() {
        return (
            <p>Rating</p>
        );
    }
}


Rating.propTypes = {
    setSessionTime: PropTypes.func.isRequired,
    time: PropTypes.number.isRequired,
    setActiveTabOpenTime: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
};

export default connect(
    null,
    { setSessionTime, setActiveTabOpenTime },
)(withRouter(Rating));

