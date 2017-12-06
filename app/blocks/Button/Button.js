import React from 'react';
import { decl } from 'bem-react-core';
import PropTypes from 'prop-types';
import ButtonText from 'e:Text';

import './button.css';

export default decl({
    block: 'Button',

    tag: 'button',

    // mods({ type, size, state }) {
    //     return {
    //         type,
    //         size,
    //         state
    //     }
    // },

    attrs({ onClick }) {
        return {
            type: 'button',
            onClick,
        };
    },

    content({ text }) {
        return (
            <ButtonText>{text}</ButtonText>
        );
    },
}, {
    propTypes: {
        text: PropTypes.string,
        type: PropTypes.string,
        size: PropTypes.string,
        state: PropTypes.string,
        onClick: PropTypes.func,
    },
    defaultProps: {
        text: 'Кнопка',
        type: 'default',
        size: 'S',
        state: 'normal',
        onClick: () => false,
    },
});

// const Button = ({ text, type, size, state, onClick }) => (
//     <Button type="Button" className={`Button Button--${type} Button--${size} Button--${state}`} onClick={() => onClick()}>
//         <span className="button__label">{text}</span>
//     </Button>
// );
//
//
// Button.propTypes = {
//     text: PropTypes.string,
//     type: PropTypes.string,
//     size: PropTypes.string,
//     state: PropTypes.string,
//     onClick: PropTypes.func,
// };
//
// Button.defaultProps = {
//     text: 'Кнопка',
//     type: 'default',
//     size: 'S',
//     state: 'normal',
//     onClick: () => false,
// };
//
// export default Button;
