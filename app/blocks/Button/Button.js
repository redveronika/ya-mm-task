import React from 'react';
import { decl } from 'bem-react-core';
import PropTypes from 'prop-types';

/* eslint-disable import/extensions, import/no-unresolved */
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
    /* eslint-disable react/prop-types */
    content({ text }) {
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
