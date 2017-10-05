import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setActiveTab } from '../../../reducers/tabs.reducer';
import { setAppOpenTime } from '../../../reducers/app.reducer';

import './tabs__item.css';

class TabsItem extends Component {
    constructor(props) {
        super(props);

        this.setActiveInStore = this.setActiveInStore.bind(this);
        this.isActiveTab = this.isActiveTab.bind(this);
    }

    componentWillMount() {
        if (this.isActiveTab()) {
            this.setActiveInStore();
        }
    }

    setActiveInStore() {
        const time = new Date().valueOf();
        if (this.props.app.openApp === null) {
            this.props.setAppOpenTime(time);
        }
        this.props.history.push({ pathname: this.props.linkTo, time });
        this.props.setActiveTab(this.props.id);
    }

    isActiveTab() {
        return this.props.history.location.pathname.includes(this.props.linkTo);
    }

    render() {
        const { title } = this.props;
        return (
            <div className="tabs__item tab" onClick={this.setActiveInStore} tabIndex="-1">
                <a className={`tab__link ${this.isActiveTab() ? 'tab__link--active' : ''}`} role="tab" tabIndex="0">
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
    setAppOpenTime: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    app: PropTypes.object.isRequired,
};

export default connect(
    state => ({
        app: state.app,
    }),
    { setActiveTab, setAppOpenTime },
)(withRouter(TabsItem));
