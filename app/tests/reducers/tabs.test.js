import {
    reducer,
    initialState,
    SET_ACTIVE_TAB,
    SET_ACTIVE_TAB_OPEN_TIME,
    REORDER_TABS,
    SET_SESSION_TIME,
} from '../../reducers/tabs.reducer';

describe('tabs reducer', () => {
    it('should return the initial state', () => {
        expect(
            reducer(undefined, {}),
        ).toEqual(initialState);
    });

    it('should handle SET_ACTIVE_TAB', () => {
        expect(
            reducer(undefined, { type: SET_ACTIVE_TAB, payload: 3 }),
        ).toEqual({ ...initialState, activeTab: 3 });
    });

    it('should handle SET_ACTIVE_TAB_OPEN_TIME', () => {
        expect(
            reducer(undefined, { type: SET_ACTIVE_TAB_OPEN_TIME, payload: 1507460913390 }),
        ).toEqual({ ...initialState, activeTabOpenTime: 1507460913390 });
    });

    it('should handle REORDER_TABS', () => {
        const reorderedTabs = [
            {
                id: 1,
                title: 'Рейтинг',
                linkTo: '/ya-mm-task/rating',
                sessionTime: [],
            },
            {
                id: 2,
                title: 'Прогресс-бар',
                linkTo: '/ya-mm-task/progress-bar',
                sessionTime: [],
            },
            {
                id: 3,
                title: 'Кнопка',
                linkTo: '/ya-mm-task/button',
                sessionTime: [],
            },
            {
                id: 4,
                title: 'Текст',
                linkTo: '/ya-mm-task/text',
                sessionTime: [],
            },
            {
                id: 5,
                title: 'Список иконок',
                linkTo: '/ya-mm-task/icons-list',
                sessionTime: [],
            },
        ];
        expect(
            reducer(undefined, { type: REORDER_TABS, payload: reorderedTabs }),
        ).toEqual({ ...initialState, tabs: reorderedTabs });
    });

    it('should handle SET_SESSION_TIME', () => {
        const newTabs = [
            {
                id: 1,
                title: 'Прогресс-бар',
                linkTo: '/ya-mm-task/progress-bar',
                sessionTime: [],
            },
            {
                id: 2,
                title: 'Рейтинг',
                linkTo: '/ya-mm-task/rating',
                sessionTime: [4080],
            },
            {
                id: 3,
                title: 'Кнопка',
                linkTo: '/ya-mm-task/button',
                sessionTime: [],
            },
            {
                id: 4,
                title: 'Список иконок',
                linkTo: '/ya-mm-task/icons-list',
                sessionTime: [],
            },
            {
                id: 5,
                title: 'Текст',
                linkTo: '/ya-mm-task/text',
                sessionTime: [],
            },
        ];
        expect(
            reducer(undefined, { type: SET_SESSION_TIME, name: 'rating', payload: 4080 }),
        ).toEqual({ ...initialState, tabs: newTabs });
    });
});
