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
        const best = this.props.args !== null && this.props.args.length === 1
            ? this.props.args[0]
            : null;
        if (best !== null &&
            +best >= this.state.minValue &&
            +best <= this.state.maxValue) {
            this.props.setRatingBest(+this.props.args);
            this.setState({ message: `Максимальное значение рейтинга установлено равным ${best}` });
        } else {
            this.setState({ message: `Введите значение от ${this.state.minValue} до ${this.state.maxValue}.` });
        }
    }

    setScore() {
        // Если значение рейтинга больше максимально допустимого,
        // то выставляем максимально допустимое.
        let args = null;
        let score = null;
        let messageSuccess = '';
        if (this.props.args !== null && this.props.args.length === 1) {
            args = this.props.args[0];
            score = Math.min(this.props.ratingBest, +args);

            messageSuccess = +args > this.props.ratingBest ?
                `Введённое значение больше максимально возможного значения рейтинга.
             Установлен максимальный рейтинг, равный ${score}` :
                `Величина рейтинга изменена на ${score}`;
            if (score >= this.state.minValue) {
                this.props.setRatingScore(score);
                this.setState({ message: messageSuccess });
            } else {
                this.setState({ message: `Введите значение большее или равное ${this.state.minValue}` });
            }
        } else {
            this.setState({ message: `Введите значение большее или равное ${this.state.minValue}` });
        }
    }

    /**
     * @param {boolean} activeColor - тип цвета звёздочек рейтинга:
     * true = активный или false = неактивный
     */
    setColor(activeColor) {
        if (this.props.args.length === 1) {
            // Значение цвета может быть передан как в кавычках, так и без.
            // На всякий случай чистим от кавычек.
            const color = this.props.args[0].replace(/['"]/g, '');
            const hexRegExp = (/^#(?:[0-9a-fA-F]{3}){1,2}$/);
            if (hexRegExp.test(color)) {
                if (activeColor) {
                    this.props.setRatingActiveColor(color);
                    this.setState({ message: `Цвет активных «звёздочек» рейтинга изменён на ${color}` });
                } else {
                    this.props.setRatingInactiveColor(color);
                    this.setState({ message: `Цвет неактивных «звёздочек» рейтинга изменён на ${color}` });
                }
            } else {
                this.setState({ message: 'Укажите цвет в формате HEX. Например, #ffc04c или #eee.' });
            }
        } else {
            this.setState({ message: 'Укажите цвет в формате HEX. Например, #ffc04c или #eee.' });
        }
    }

    // В зависимости от того, какая команда была введена,
    // вызываем ту или иную функцию.
    manageRating() {
        switch (this.props.command) {
        case 'setBest':
            return this.setBest();
        case 'setScore':
            return this.setScore();
        case 'setActiveColor':
            return this.setColor(true);
        case 'setInactiveColor':
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
    args: PropTypes.array.isRequired,
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
