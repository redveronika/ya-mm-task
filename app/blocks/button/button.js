import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setSessionTime } from '../../reducers/tabs.reducer';

import './button.css';

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timeOpened: null,
        };
    }

    componentWillMount() {
        const time = new Date().valueOf();
        this.setState({ timeOpened: time });
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
};

export default connect(
    null,
    { setSessionTime },
)(Button);

