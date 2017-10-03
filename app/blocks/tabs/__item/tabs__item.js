import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import './tabs__item.css';

const TabsItem = props => (
    <div className="tabs__item tab">
        <NavLink to={props.tab.linkTo} className="tab__link" activeClassName="tab__link--active">
            {props.tab.title}
        </NavLink>
    </div>
);

export default TabsItem;
