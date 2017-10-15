import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setRatingScore, setRatingBest, setRatingActiveColor, setRatingInactiveColor } from '../../reducers/rating.reducer';

import './manage-rating.css';

class ManageRating extends Component {
    constructor(props) {
        super(props);

        this.state = {
            timeMounted: null,
            message: '',
            // минимально возможное кол-во "звёздочек" рейтинга
            minValue: 1,
            // максимально возможное кол-во "звёздочек" рейтинга
            maxValue: 10,
        };

        this.setBest = this.setBest.bind(this);
        this.setScore = this.setScore.bind(this);
        this.setColor = this.setColor.bind(this);
    }

    componentWillMount() {
        this.setState({ timeMounted: this.props.time });
        this.manageRating();
    }

    componentDidUpdate() {
        // Вызываем функцию только, если время в параметрах изменилось.
        if (this.props.time !== this.state.timeMounted) {
            this.setState({ timeMounted: this.props.time });
            this.manageRating();
        }
    }

    setBest() {
        if (+this.props.args >= this.state.minValue &&
            +this.props.args <= this.state.maxValue) {
            this.props.setRatingBest(+this.props.args);
            this.setState({ message: `Максимальное значение рейтинга установлено равным ${this.props.args}` });
        } else {
            this.setState({ message: `Введите значение от ${this.state.minValue} до ${this.state.maxValue}.` });
        }
    }

    setScore() {
        // Если значение рейтинга больше максимально допустимого,
        // то выставляем максимально допустимое.
        const score = Math.min(this.props.ratingBest, +this.props.args);
        if (score > 0) {
            this.props.setRatingScore(score);
            this.setState({ message: `Величина рейтинга изменена на ${score}` });
        } else {
            this.setState({ message: `Введите значение большее или равное ${this.state.minValue}` });
        }
    }

    /**
     * @param {boolean} activeColor - тип цвета звёздочек рейтинга:
     * true = активный или false = неактивный
     */
    setColor(activeColor) {
        // Значение цвета может быть передан как в кавычках, так и без.
        // На всякий случай чистим от кавычек.
        const color = this.props.args.replace(/['"]/g, '');
        const hexRegExp = (/^#(?:[0-9a-fA-F]{3}){1,2}$/);
        if (hexRegExp.test(color) === true) {
            const message = activeColor === true ?
                `Активный цвет рейтинга изменён на ${color}` :
                `Неактивный цвет рейтинга изменён на ${color}`;
            if (activeColor === true) {
                this.props.setRatingActiveColor(color);
            } else {
                this.props.setRatingInactiveColor(color);
            }
            this.setState({ message });
        } else {
            this.setState({ message: 'Укажите цвет в формате HEX. Например, #ffc04c или #eee.' });
        }
    }

    // В зависимости от того, какая команда была введена,
    // вызываем ту или иную функцию.
    manageRating() {
        switch (this.props.command) {
        case 'setBest()':
            return this.setBest();
        case 'setScore()':
            return this.setScore();
        case 'setActiveColor()':
            return this.setColor(true);
        case 'setInactiveColor()':
            return this.setColor(false);
        default:
            return null;
        }
    }

    render() {
        return (
            <div className="manage-rating">
                {this.state.message}
            </div>
        );
    }
}

ManageRating.propTypes = {
    command: PropTypes.string.isRequired,
    args: PropTypes.string.isRequired,
    time: PropTypes.number.isRequired,
    ratingBest: PropTypes.number.isRequired,
    setRatingBest: PropTypes.func.isRequired,
    setRatingScore: PropTypes.func.isRequired,
    setRatingActiveColor: PropTypes.func.isRequired,
    setRatingInactiveColor: PropTypes.func.isRequired,
};

export default connect(
    state => ({
        ratingBest: state.rating.best,
    }),
    { setRatingScore, setRatingBest, setRatingActiveColor, setRatingInactiveColor },
)(ManageRating);
