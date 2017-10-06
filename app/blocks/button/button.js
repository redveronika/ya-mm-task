import React from 'react';
import PropTypes from 'prop-types';

import './button.css';

const Button = ({ text, type, size, state, onClick }) => (
    <button className={`button button--${type} button--${size} button--${state}`} onClick={() => onClick()} >
        <span className="button__label">{text}</span>
    </button>
);


Button.propTypes = {
    text: PropTypes.string,
    type: PropTypes.string,
    size: PropTypes.string,
    state: PropTypes.string,
    onClick: PropTypes.func,
};

Button.defaultProps = {
    text: 'Кнопка',
    type: 'default',
    size: 'S',
    state: 'normal',
    onClick: () => false,
};

export default Button;
