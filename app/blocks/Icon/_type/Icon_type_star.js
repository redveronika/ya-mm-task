import React from 'react';
import { declMod } from 'bem-react-core';
import PropTypes from 'prop-types';

export default declMod({ type: 'star' }, {
    block: 'Icon',

    /* eslint-disable react/prop-types */
    content({ title, desc, color }) {
        return (
            <g>
                <title>{title}</title>
                <desc>{desc}</desc>
                <path fill={color} d="M501.28 194.37l-166.02-35.04-84.62-147.06v407.5l154.9 69.24-17.98-168.72" />
                <path fill={color} d="M166.02 159.33L0 194.37l113.72 125.92-17.98 168.72 154.9-69.24V12.27" />
            </g>
        );
    },
},
{
    propTypes: {
        color: PropTypes.string,
        title: PropTypes.string,
        desc: PropTypes.string,
    },

    defaultProps: {
        color: '#000',
        title: 'Звёздочка',
        desc: 'Одна звёздочка',
    },
});
