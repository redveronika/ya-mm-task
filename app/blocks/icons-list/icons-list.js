import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setSessionTime } from '../../reducers/tabs.reducer';

import './icons-list.css';

class IconsList extends Component {
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
        this.props.setSessionTime('icons-list', time - this.state.timeOpened);
    }

    render() {
        return (
            <p>IconsList</p>
        );
    }
}


IconsList.propTypes = {
    setSessionTime: PropTypes.func.isRequired,
};

export default connect(
    null,
    { setSessionTime },
)(IconsList);

