import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setProgress } from '../../reducers/progress.reducer';

class ManageProgress extends Component {
    constructor(props) {
        super(props);

        this.state = {
            timeMounted: null,
            message: '',
        };

        this.manageProgress = this.manageProgress.bind(this);
    }

    componentWillMount() {
        this.setState({ timeMounted: this.props.time });
        this.manageProgress();
    }

    componentDidUpdate() {
        if (this.props.time !== this.state.timeMounted) {
            this.setState({ timeMounted: this.props.time });
            this.manageProgress();
        }
    }

    manageProgress() {
        const progress = +this.props.args;
        const maxProgress = 0;
        const minProgress = 100;
        if (progress >= maxProgress && progress <= minProgress) {
            this.props.setProgress(progress);
            this.setState({ message: `Значение прогресса установлено равным ${progress}.` });
        } else {
            this.setState({ message: `Введите корректную величину прогресса — целое число от ${minProgress} до ${maxProgress}.` });
        }
    }

    render() {
        return (
            <div className="manage-progress">
                {this.state.message}
            </div>
        );
    }
}

ManageProgress.propTypes = {
    args: PropTypes.string.isRequired,
    time: PropTypes.number.isRequired,
    setProgress: PropTypes.func.isRequired,
};

export default connect(
    null,
    { setProgress },
)(ManageProgress);
