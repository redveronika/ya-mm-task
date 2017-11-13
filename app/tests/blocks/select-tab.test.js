import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SelectTab from '../../blocks/select-tab/select-tab';

configure({ adapter: new Adapter() });

describe('SelectTab', () => {
    const initialState = {
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
    };
    const mockStore = configureStore();
    let props;
    let store;
    let wrapper;

    beforeEach(() => {
        props = {
            selectedTabId: ['2'],
        };
        store = mockStore(initialState);
        wrapper = shallow(
            <Provider store={store}>
                <SelectTab selectedTabId={props.selectedTabId} />
            </Provider>,
        );
    });

    it('render the connected component', () => {
        expect(wrapper.find(SelectTab).length).toEqual(1);
    });
});
