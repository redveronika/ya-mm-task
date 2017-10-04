import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setSessionTime } from '../../reducers/rating.reducer';

import './rating.css';

class Rating extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timeOpened: '',
            timeClosed: '',
        };
    }

    componentDidMount() {
        const time = new Date().valueOf();
        this.setState({ timeOpened: time });
    }

    componentWillUnmount() {
        const time = new Date().valueOf();
        this.setState({ timeClosed: time });
        this.props.setSessionTime(time - this.state.timeOpened);
    }

    render() {
        return (
            <p>Rating</p>
        );
    }
}


Rating.propTypes = {
    setSessionTime: PropTypes.func.isRequired,
};

export default connect(
    state => ({
        sessionTime: state.rating.sessionTime,
    }),
    { setSessionTime },
)(Rating);

