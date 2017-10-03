import React from 'react';
import PropTypes from 'prop-types';
import TabsItem from './__item/tabs__item';

import './tabs.css';

const Tabs = ({ tabs }) => (
    <div className="tabs">
        <div className="tabs__container">
            { tabs.length > 0 && tabs.map(tab => (
                <TabsItem linkTo={tab.linkTo} title={tab.title} key={tab.id} />
            ))}
        </div>
    </div>
);

Tabs.propTypes = {
    tabs: PropTypes.array.isRequired,
};

export default Tabs;
