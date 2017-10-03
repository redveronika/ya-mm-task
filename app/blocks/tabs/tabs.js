import React from 'react';
import PropTypes from 'prop-types';
import TabsItem from './__item/tabs__item';

import './tabs.css';

const Tabs = ({ tabs }) => (
    <div className="tabs">
        <div className="tabs__container">
            { tabs.length > 0 && tabs.map(tab => (
                <TabsItem tab={tab} key={tab.id} />
            ))}
        </div>
    </div>
);

Tabs.propTypes = {
    tabs: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Tabs;
