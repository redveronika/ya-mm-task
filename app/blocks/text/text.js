import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setSessionTime } from '../../reducers/tabs.reducer';

import './text.css';

class Text extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timeOpened: null,
        };
    }

    componentWillMount() {
        const timeOpened = new Date().valueOf();
        this.setState({ timeOpened });
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
};

export default connect(
    null,
    { setSessionTime },
)(Text);

