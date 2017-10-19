import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
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
        if (this.props.activeTab === null && location.pathname.includes(this.props.linkTo)) {
            this.setActiveTabInStore();
        }
    }

    shouldComponentUpdate(nextProps) {
        return location.pathname.includes(nextProps.linkTo) ||
            nextProps.id === this.props.activeTab;
    }

    setActiveTabInStore() {
        const time = Date.now();
        // Устанавливаем время открытия активного таба в сторе.
        this.props.setActiveTabOpenTime(time);
        // Записываем выбранный таб, как активный в стор.
        this.props.setActiveTab(this.props.id);
    }

    render() {
        const { title, linkTo } = this.props;
        return (
            <div className="tabs__item tab" onClick={this.setActiveTabInStore} tabIndex="-1">
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
    setActiveTabOpenTime: PropTypes.func.isRequired,
    activeTab: PropTypes.number,
};

TabsItem.defaultProps = {
    activeTab: null,
};

export default connect(
    state => ({
        activeTab: state.tabs.activeTab,
    }),
    { setActiveTab, setActiveTabOpenTime },
)(TabsItem);
