import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/* eslint-disable import/extensions, import/no-unresolved */
import Icon from 'b:Icon m:type=star';

import { setSessionTime } from '../../reducers/tabs.reducer';
import { setRatingScore } from '../../reducers/rating.reducer';

import './rating.css';

class Rating extends Component {
    componentWillUnmount() {
        const time = Date.now();
        // Добавляем время текущей сессии на данной вкладке в стор.
        this.props.setSessionTime('rating', time - this.props.activeTabOpenTime);
    }

    setRating(i) {
        // Устанавливаем значения рейтинга в сторе.
        this.props.setRatingScore(i + 1);
    }

    renderItem(i) {
        const { score, activeColor, inactiveColor } = this.props.rating;
        return (
            <span className="rating__item" key={i} onClick={() => this.setRating(i)}>
                <Icon
                    type="star"
                    color={i < score ? activeColor : inactiveColor}
                    width="30"
                    height="30"
                    desc="Одна звёздочка рейтинга"
                />
            </span>
        );
    }

    render() {
        return (
            <div className="rating">
                {/*
                    Создаём пустой массив размером равным максимальному количеству "звёздочек",
                    наполняем его 0, а затем проходим map-ом
                    и добавляем требуемое кол-во "звёздочек".
                */}
                { new Array(+this.props.rating.best).fill(0).map((el, i) => this.renderItem(i)) }
            </div>
        );
    }
}


Rating.propTypes = {
    setSessionTime: PropTypes.func.isRequired,
    setRatingScore: PropTypes.func.isRequired,
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
    { setSessionTime, setRatingScore },
)(Rating);
