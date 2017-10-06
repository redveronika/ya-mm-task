import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setSessionTime, setActiveTabOpenTime } from '../../reducers/tabs.reducer';
import { setRatingScore } from '../../reducers/rating.reducer';
import { Icon } from '../../blocks';

import './rating.css';

class Rating extends Component {
    componentWillMount() {
        this.props.setActiveTabOpenTime(this.props.history.location.time);
    }

    componentWillUnmount() {
        const time = new Date().valueOf();
        this.props.setSessionTime('rating', time - this.props.activeTabOpenTime);
    }

    setRating(i) {
        this.props.setRatingScore(i + 1);
    }

    renderItem(i) {
        const { score, activeColor, inactiveColor } = this.props.rating;
        return (
            <span className="rating__item" key={i} onClick={() => this.setRating(i)}>
                <Icon
                    name="star"
                    color={i < score ? activeColor : inactiveColor}
                    width="30"
                    height="30"
                />
            </span>
        );
    }

    render() {
        return (
            <div className="rating">
                { Array(+this.props.rating.best).fill(0).map((el, i) => this.renderItem(i)) }
            </div>
        );
    }
}


Rating.propTypes = {
    setSessionTime: PropTypes.func.isRequired,
    setActiveTabOpenTime: PropTypes.func.isRequired,
    setRatingScore: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    rating: PropTypes.object.isRequired,
    activeTabOpenTime: PropTypes.any,
};

Rating.defaultProps = {
    activeTabOpenTime: 0,
};

export default connect(
    state => ({
        rating: state.rating,
        activeTabOpenTime: state.tabs.activeTabOpenTime,
    }),
    { setSessionTime, setActiveTabOpenTime, setRatingScore },
)(withRouter(Rating));
