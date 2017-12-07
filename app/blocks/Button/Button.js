import React from 'react';
import { decl } from 'bem-react-core';
import PropTypes from 'prop-types';

import ButtonText from 'e:Text';

export default decl({
    block: 'Button',

    tag: 'button',

    mods({ mode, size, state }) {
        return {
            mode,
            size,
            state,
        };
    },

    attrs({ onClick }) {
        return {
            type: 'button',
            onClick,
        };
    },

    content({ text }) {
        console.log('content');
        return (
            <ButtonText>{text}</ButtonText>
        );
    },
}, {
    propTypes: {
        text: PropTypes.string,
        mode: PropTypes.string,
        size: PropTypes.string,
        state: PropTypes.string,
        onClick: PropTypes.func,
    },
    defaultProps: {
        text: 'Кнопка',
        mode: 'default',
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
