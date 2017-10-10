import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setActiveTab, setActiveTabOpenTime } from '../../../reducers/tabs.reducer';

import './tabs__item.css';

class TabsItem extends Component {
    constructor(props) {
        super(props);

        this.setActiveTabInStore = this.setActiveTabInStore.bind(this);
    }

    componentWillMount() {
        // При заходе в приложение выставляем активный таб, исходя из location.
        if (this.props.history.location.pathname === this.props.linkTo) {
            this.setActiveTabInStore();
        }
    }

    setActiveTabInStore() {
        const time = new Date().valueOf();
        // Устанавливаем время открытия активного таба в сторе.
        this.props.setActiveTabOpenTime(time);
        // Записываем выбранный таб, как активный в стор.
        this.props.setActiveTab(this.props.id);
    }

    render() {
        const { title, linkTo } = this.props;
        return (
            // keyCode = 13 - обработка кнопки "Enter" для навигации по табам с клавиатуры
            <div
                className="tabs__item tab"
                onClick={this.setActiveTabInStore}
                onKeyDown={e => (e.keyCode === 13 ? this.setActiveTabInStore() : false)}
                tabIndex="-1"
            >
                <NavLink to={linkTo} className="tab__link" activeClassName="tab__link--active" role="tab" tabIndex="0">
                    {title}
                </NavLink>
            </div>
        );
    }
}

TabsItem.propTypes = {
    id: PropTypes.number.isRequired,
    linkTo: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    setActiveTab: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    setActiveTabOpenTime: PropTypes.func.isRequired,
};

export default connect(
    state => ({
        activeTab: state.tabs.activeTab,
    }),
    { setActiveTab, setActiveTabOpenTime },
)(withRouter(TabsItem));
