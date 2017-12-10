import { decl } from 'bem-react-core';
import PropTypes from 'prop-types';

export default decl({
    block: 'Icon',

    tag: 'svg',

    mods({ type }) {
        return {
            type,
        };
    },

    attrs({ title, desc, width, height }) {
        return {
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 501 501',
            width,
            height,
            role: 'img',
            'aria-labelledby': `${title}  ${desc}`,
        };
    },
},
{
    propTypes: {
        type: PropTypes.string.isRequired,
        width: PropTypes.string,
        height: PropTypes.string,
    },

    defaultProps: {
        width: '20',
        height: '20',
    },
});
