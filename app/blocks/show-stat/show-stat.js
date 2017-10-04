import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './show-stat.css';

class ShowStat extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ratingSessionTime: 0,
            commonSessionTime: 0,
        };
    }

    componentDidMount() {
        this.showStat();
    }

    showStat() {
        const ratingTime = this.props.ratingSessionTime.reduce((sum, current) => {
            sum += current;
            return sum;
        }, 0);
        this.setState({ ratingSessionTime: ratingTime });
    }

    render() {
        return (
            <p>{this.state.ratingSessionTime / 1000} сек</p>
        );
    }
}

ShowStat.propTypes = {
    ratingSessionTime: PropTypes.array.isRequired,
};

export default connect(
    state => ({
        ratingSessionTime: state.rating.sessionTime,
    }),
)(ShowStat);

