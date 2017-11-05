import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import { Console } from '../../blocks/console/console';

Enzyme.configure({ adapter: new Adapter() });

describe('console component', () => {
    const component = shallow(<Console />).instance();
    it('should return showStat() command parsing result', () => {
        expect(
            component.parseCommand('showStat()'),
        ).toEqual({ strArgs: '', command: 'showStat()' });
    });
});

