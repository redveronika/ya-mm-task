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
        };

        this.setBest = this.setBest.bind(this);
        this.setScore = this.setScore.bind(this);
        this.setActiveColor = this.setActiveColor.bind(this);
        this.setInactiveColor = this.setInactiveColor.bind(this);
    }

    componentWillMount() {
        this.setState({ timeMounted: this.props.time });
        this.manageRating();
    }

    componentDidUpdate() {
        if (this.props.time !== this.state.timeMounted) {
            this.setState({ timeMounted: this.props.time });
            this.manageRating();
        }
    }

    setBest() {
        if (+this.props.args > 0 && +this.props.args <= 10) {
            this.props.setRatingBest(+this.props.args);
            this.setState({ message: `Максимальное значение рейтинга установлено равным ${this.props.args}` });
        } else {
            this.setState({ message: 'Введите значение от 1 до 10.' });
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
            this.setState({ message: 'Введите значение больше 1' });
        }
    }

    setActiveColor() {
        const color = this.props.args.replace(/['"]/g, '');
        if (color !== '') {
            this.props.setRatingActiveColor(color);
            this.setState({ message: `Активный цвет рейтинга изменён на "${color}"` });
        } else {
            this.setState({ message: 'Укажите желаемый цвет.' });
        }
    }

    setInactiveColor() {
        const color = this.props.args.replace(/['"]/g, '');
        if (color !== '') {
            this.props.setRatingInactiveColor(color);
            this.setState({ message: `Неактивный цвет рейтинга изменён на "${color}"` });
        } else {
            this.setState({ message: 'Укажите желаемый цвет.' });
        }
    }

    manageRating() {
        switch (this.props.command) {
        case 'setBest()':
            return this.setBest();
        case 'setScore()':
            return this.setScore();
        case 'setActiveColor()':
            return this.setActiveColor();
        case 'setInactiveColor()':
            return this.setInactiveColor();
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
