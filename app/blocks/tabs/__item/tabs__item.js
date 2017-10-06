import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setActiveTab } from '../../../reducers/tabs.reducer';

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

    shouldComponentUpdate() {
        console.log('shouldComponentUpdate')
        return this.props.history.location.pathname !== this.props.linkTo;
    }

    setActiveInStore() {
        const time = new Date().valueOf();
        this.props.history.push({ pathname: this.props.linkTo, time });
        this.props.setActiveTab(this.props.id);
    }

    isActiveTab() {
        console.log(this.props.linkTo);
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
    history: PropTypes.object.isRequired,
};

export default connect(
    null,
    { setActiveTab },
)(withRouter(TabsItem));
