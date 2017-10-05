import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setSessionTime } from '../../reducers/tabs.reducer';

import './rating.css';

class Rating extends Component {
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
};

export default connect(
    null,
    { setSessionTime },
)(Rating);

