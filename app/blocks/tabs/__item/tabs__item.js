import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setActiveTab } from '../../../reducers/tabs.reducer';
import { setActiveTabOpenTime } from '../../../reducers/app.reducer';

import './tabs__item.css';

class TabsItem extends Component {
    constructor(props) {
        super(props);

        this.setActiveInStore = this.setActiveInStore.bind(this);
    }

    componentWillMount() {
        if (this.props.history.location.pathname.includes(this.props.linkTo)) {
            this.setActiveInStore();
        }
    }

    setActiveInStore() {
        this.props.setActiveTabOpenTime(new Date().valueOf());
        this.props.setActiveTab(this.props.id);
    }

    render() {
        const { linkTo, title } = this.props;
        return (
            <div className="tabs__item tab" onClick={this.setActiveInStore}>
                <NavLink to={linkTo} className="tab__link" activeClassName="tab__link--active">
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
    history: PropTypes.object.isRequired,
};

export default connect(
    state => ({
        activeTab: state.tabs.activeTab,
    }),
    { setActiveTab, setActiveTabOpenTime },
)(withRouter(TabsItem));
