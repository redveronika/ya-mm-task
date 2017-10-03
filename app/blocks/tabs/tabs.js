import React from 'react';
import PropTypes from 'prop-types';
import TabsItem from './__item/tabs__item';

import './tabs.css';

const Tabs = props => (
    <div className="tabs">
        <div className="tabs__container">
            { props.tabs.length > 0 && props.tabs.map((tab, i) => (
                <TabsItem tab={tab} key={i} />
            ))}
        </div>
    </div>
);

export default Tabs;
