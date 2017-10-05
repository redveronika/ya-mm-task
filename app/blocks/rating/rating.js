import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setSessionTime } from '../../reducers/tabs.reducer';
import { setActiveTabOpenTime } from '../../reducers/app.reducer';
import { Icon } from '../../blocks';

import './rating.css';
import {setRatingScore} from '../../reducers/rating.reducer';

class Rating extends Component {
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
        this.props.setSessionTime('rating', time - this.state.timeOpened);
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
};

export default connect(
    state => ({
        rating: state.rating,
    }),
    { setSessionTime, setActiveTabOpenTime, setRatingScore },
)(withRouter(Rating));

