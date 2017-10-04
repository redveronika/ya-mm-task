const initialState = {
    tabs: [
        {
            id: 1,
            title: 'Прогресс-бар',
            linkTo: '/main/progress-bar',
        },
        {
            id: 2,
            title: 'Рейтинг',
            linkTo: '/main/rating',
        },
        {
            id: 3,
            title: 'Кнопка',
            linkTo: '/main/button',
        },
        {
            id: 4,
            title: 'Список иконок',
            linkTo: '/main/icons-list',
        },
        {
            id: 5,
            title: 'Текст',
            linkTo: '/main/text',
        },
    ],
    activeTab: null,
};

const SET_ACTIVE_TAB = 'SET_ACTIVE_TAB';
const REORDER_TABS = 'REORDER_TABS';

const setActiveTab = id => ({ type: SET_ACTIVE_TAB, payload: id });
const reorderTabs = tabs => ({ type: REORDER_TABS, payload: tabs });

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case SET_ACTIVE_TAB:
        return { ...state, activeTab: action.payload };
    case REORDER_TABS:
        return { ...state, tabs: action.payload };
    default:
        return state;
    }
};

export { reducer, setActiveTab, reorderTabs };
