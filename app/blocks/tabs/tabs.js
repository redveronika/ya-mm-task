import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TabsItem from './__item/tabs__item';

import './tabs.css';

class Tabs extends Component {
    shouldComponentUpdate(nextProps) {
        const changedTabs = nextProps.tabs.filter((item, index) => (
            this.props.tabs[index].title !== item.title
        ));
        return changedTabs.length > 0;
    }

    render() {
        return (
            <div className="tabs">
                <div className="tabs__container">
                    { this.props.tabs.length > 0 && this.props.tabs.map(tab => (
                        <TabsItem id={tab.id} title={tab.title} linkTo={tab.linkTo} key={tab.id} />
                    ))}
                </div>
            </div>
        );
    }
}

Tabs.propTypes = {
    tabs: PropTypes.array.isRequired,
};

export default Tabs;
