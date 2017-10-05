import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setActiveTab } from '../../../reducers/tabs.reducer';
import { setActiveTabOpenTime, setAppOpenTime } from '../../../reducers/app.reducer';

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

    setActiveInStore(time1) {
        const time = time1 || new Date().valueOf();
        if (this.props.app.openApp === null) {
            this.props.setAppOpenTime(time);
        }
        this.props.setActiveTabOpenTime(time);
        this.props.setActiveTab(this.props.id);
    }

    render() {
        const { linkTo, title } = this.props;
        return (
            <div className="tabs__item tab" onClick={() => this.setActiveInStore(new Date().valueOf())} tabIndex="-1">
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
    setAppOpenTime: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    app: PropTypes.object.isRequired,
};

export default connect(
    state => ({
        activeTab: state.tabs.activeTab,
        app: state.app,
    }),
    { setActiveTab, setActiveTabOpenTime, setAppOpenTime },
)(withRouter(TabsItem));
