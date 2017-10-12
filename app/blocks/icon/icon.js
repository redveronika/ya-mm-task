import React from 'react';
import PropTypes from 'prop-types';

import './icon.css';

const Icon = ({ name, color, width, height, desc }) => {
    // Здесь могут быть ещё иконки, выбираем по параметру "name".
    switch (name) {
    case 'star':
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 501.28 501.28"
                width={width}
                height={height}
                role="img"
                aria-labelledby="title  desc"
            >
                <title id="title">Звёздочка</title>
                <desc id="desc">{desc}</desc>
                <path fill={color} d="M501.28 194.37l-166.02-35.04-84.62-147.06v407.5l154.9 69.24-17.98-168.72" />
                <path fill={color} d="M166.02 159.33L0 194.37l113.72 125.92-17.98 168.72 154.9-69.24V12.27" />
            </svg>

        );
    default:
        return null;
    }
};

Icon.propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    desc: PropTypes.string,
};

Icon.defaultProps = {
    color: '#000',
    width: '20',
    height: '20',
    desc: 'Одна звёздочка',
};

export default Icon;
