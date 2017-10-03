import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import './tabs__item.css';

const TabsItem = ({ linkTo, title }) => (
    <div className="tabs__item tab">
        <NavLink to={linkTo} className="tab__link" activeClassName="tab__link--active">
            {title}
        </NavLink>
    </div>
);

TabsItem.propTypes = {
    linkTo: PropTypes.string,
    title: PropTypes.string,
};

TabsItem.defaultProps = {
    linkTo: '',
    title: '',
};

export default TabsItem;
