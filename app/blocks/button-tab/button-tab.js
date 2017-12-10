import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/* eslint-disable import/extensions, import/no-unresolved */
import Button from 'b:Button m:mode=default|action|light|bright m:size=S|M|L|XL';
import { setSessionTime } from '../../reducers/tabs.reducer';

import './button-tab.css';

class ButtonTab extends Component {
    componentWillUnmount() {
        const time = Date.now();
        // Добавляем время текущей сессии на данной вкладке в стор.
        this.props.setSessionTime('button', time - this.props.activeTabOpenTime);
    }

    render() {
        return (
            <div className="button-tab">
                {/*
                Блок с представлением разных размеров кнопки.
                Размер кнопки меняется параметром "size"
                 */}
                <div className="button-tab__col">
                    <h4>Кнопки могут быть разного размера</h4>
                    <div className="button-tab__item">
                        <Button text="Гигантская кнопка" size="XL" />
                    </div>
                    <div className="button-tab__item">
                        <Button text="Кнопка L" size="L" />
                    </div>
                    <div className="button-tab__item">
                        <Button text="Кнопка M" size="M" />
                    </div>
                    <div className="button-tab__item">
                        <Button text="Кнопка S" />
                    </div>
                </div>
                {/*
                 Блок с представлением разных состояний кнопки.
                 Состояние кнопки меняется параметром "state"
                 */}
                <div className="button-tab__col">
                    <h4>Кнопки могут иметь разное состояние</h4>
                    <div className="button-tab__item">
                        <Button text="Нормальная такая кнопка" size="M" state="normal" mode="action" />
                    </div>
                    <div className="button-tab__item">
                        <Button text=":hover" size="M" state="hover" mode="action" />
                    </div>
                    <div className="button-tab__item">
                        <Button text=":focus" size="M" state="focus" mode="action" />
                    </div>
                    <div className="button-tab__item">
                        <Button text=":active" size="M" state="active" mode="action" />
                    </div>
                </div>
                {/*
                 Блок с представлением разных скинов кнопки.
                 Размер кнопки меняется параметром "type"
                 */}
                <div className="button-tab__col">
                    <h4>Кнопки могут легко менять своё визуальное представление</h4>
                    <div className="button-tab__item">
                        <Button text="type = action" size="M" mode="action" />
                    </div>
                    <div className="button-tab__item">
                        <Button text="type = default" size="M" mode="default" />
                    </div>
                    <div className="button-tab__item">
                        <Button text="type = light" size="M" mode="light" />
                    </div>
                    <div className="button-tab__item">
                        <Button text="type = bright" size="M" mode="bright" />
                    </div>
                </div>
            </div>
        );
    }
}


ButtonTab.propTypes = {
    setSessionTime: PropTypes.func.isRequired,
    activeTabOpenTime: PropTypes.any,
};

ButtonTab.defaultProps = {
    activeTabOpenTime: 0,
};

export default connect(
    state => ({
        activeTabOpenTime: state.tabs.activeTabOpenTime,
    }),
    { setSessionTime },
)(ButtonTab);
