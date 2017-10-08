import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setActiveTab } from '../../../reducers/tabs.reducer';

import './tabs__item.css';

class TabsItem extends Component {
    constructor(props) {
        super(props);

        this.setActiveTab = this.setActiveTab.bind(this);
    }

    componentWillMount() {
        // При заходе в приложение выставляем активный таб, исходя из location.
        if (this.props.history.location.pathname === this.props.linkTo) {
            this.setActiveTab();
        }
    }

    setActiveTab() {
        const time = new Date().valueOf();
        // Навигируемся на выбранный таб.
        this.props.history.push({ pathname: this.props.linkTo, time });
        // Записываем выбранный таб, как активный в стор.
        this.props.setActiveTab(this.props.id);
    }

    render() {
        const { id, title, activeTab } = this.props;
        return (
            // keyCode = 13 - обработка кнопки "Enter" для навигации по табам с клавиатуры
            <div
                className="tabs__item tab"
                onClick={this.setActiveTab}
                onKeyDown={e => (e.keyCode === 13 ? this.setActiveTab() : false)}
                tabIndex="-1"
            >
                <a className={`tab__link ${activeTab === id ? 'tab__link--active' : ''}`} role="tab" tabIndex="0">
                    {title}
                </a>
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
    activeTab: PropTypes.any,
};

TabsItem.defaultProps = {
    activeTab: null,
};

export default connect(
    state => ({
        activeTab: state.tabs.activeTab,
    }),
    { setActiveTab },
)(withRouter(TabsItem));
