import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { setSessionTime, setActiveTabOpenTime } from '../../reducers/tabs.reducer';
import { Button } from '../../blocks';

import './button-tab.css';

class ButtonTab extends Component {
    componentWillMount() {
        this.props.setActiveTabOpenTime(this.props.history.location.time);
    }

    componentWillUnmount() {
        const time = new Date().valueOf();
        this.props.setSessionTime('button', time - this.props.activeTabOpenTime);
    }

    render() {
        return (
            <div className="button-tab">
                <div className="button-tab__col button-sizes">
                    <h4>Кнопки могут быть разного размера</h4>
                    <div className="button-sizes__item">
                        <Button text="Гигантская кнопка" size="XL" onClick={() => alert('Тут будет магия!')} />
                    </div>
                    <div className="button-sizes__item">
                        <Button text="Кнопка L" size="L" onClick={() => alert('Тут будет магия!')} />
                    </div>
                    <div className="button-sizes__item">
                        <Button text="Кнопка M" size="M" onClick={() => alert('Тут будет магия!')} />
                    </div>
                    <div className="button-sizes__item">
                        <Button text="Кнопка S" onClick={() => alert('Тут будет магия!')} />
                    </div>
                </div>
                <div className="button-tab__col button-sizes">
                    <h4>Кнопки могут иметь разное состояние</h4>
                    <div className="button-sizes__item">
                        <Button text="Нормальная такая кнопка" size="M" state="normal" type="action" />
                    </div>
                    <div className="button-sizes__item">
                        <Button text=":hover" size="M" state="hover" type="action" />
                    </div>
                    <div className="button-sizes__item">
                        <Button text=":focus" size="M" state="focus" type="action" />
                    </div>
                    <div className="button-sizes__item">
                        <Button text=":active" size="M" state="active" type="action" />
                    </div>
                </div>
                <div className="button-tab__col button-sizes">
                    <h4>Кнопки могут легко менять своё визуальное представление</h4>
                    <div className="button-sizes__item">
                        <Button text="type = action" size="M" type="action" />
                    </div>
                    <div className="button-sizes__item">
                        <Button text="type = default" size="M" type="default" />
                    </div>
                    <div className="button-sizes__item">
                        <Button text="type = light" size="M" type="light" />
                    </div>
                    <div className="button-sizes__item">
                        <Button text="type = bright" size="M" type="bright" />
                    </div>
                </div>
            </div>
        );
    }
}


ButtonTab.propTypes = {
    setSessionTime: PropTypes.func.isRequired,
    setActiveTabOpenTime: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    activeTabOpenTime: PropTypes.any,
};

ButtonTab.defaultProps = {
    activeTabOpenTime: 0,
};

export default connect(
    state => ({
        activeTabOpenTime: state.tabs.activeTabOpenTime,
    }),
    { setSessionTime, setActiveTabOpenTime },
)(withRouter(ButtonTab));
