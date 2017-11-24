import React from 'react';
import { createMockStore } from 'redux-test-utils';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SelectTab from '../../blocks/select-tab/select-tab';

configure({ adapter: new Adapter() });

describe('SelectTab', () => {
    const initialState = {
        tabs: {
            tabs: [
                {
                    id: 1,
                    title: 'Прогресс-бар',
                    linkTo: '/progress-bar',
                    sessionTime: [
                        29607,
                        120296,
                        16306,
                        89201519,
                        89209401,
                    ],
                },
                {
                    id: 2,
                    title: 'Рейтинг',
                    linkTo: '/rating',
                    sessionTime: [
                        1032841,
                        1042618,
                    ],
                },
                {
                    id: 3,
                    title: 'Кнопка',
                    linkTo: '/button',
                    sessionTime: [
                        1049637,
                    ],
                },
                {
                    id: 4,
                    title: 'Список иконок',
                    linkTo: '/icons-list',
                    sessionTime: [
                        114615,
                        117171,
                        143570,
                        217921,
                        690672,
                        699659,
                        856057,
                        878479,
                        910660,
                        1082918,
                        1100896,
                    ],
                },
                {
                    id: 5,
                    title: 'Текст',
                    linkTo: '/text',
                    sessionTime: [],
                },
            ],
        },
    };
    let props;
    let wrapper;
    const store = createMockStore(initialState);

    beforeEach(() => {
        props = {
            selectedTabId: ['2'],
        };

        wrapper = shallow(
            <SelectTab selectedTabId={props.selectedTabId} />,
            { context: { store } },
        );
    });

    it('render the connected component', () => {
        expect(wrapper.length).toEqual(1);
    });

    // it('always renders a p', () => {
    //     const p = wrapper.find('p');
    //     expect(p.length).toBeGreaterThan(0);
    // });

    it('check selectedTabId prop', () => {
        expect(wrapper.prop('selectedTabId')).toEqual(props.selectedTabId);
    });

    it('check tabs prop', () => {
        expect(wrapper.prop('tabs')).toEqual(store.getState().tabs.tabs);
    });
});
