const initialState = {
    tabs: [
        {
            id: 1,
            title: 'Прогресс-бар',
            linkTo: '/main/progress-bar',
            sessionTime: [],
        },
        {
            id: 2,
            title: 'Рейтинг',
            linkTo: '/main/rating',
            sessionTime: [],
        },
        {
            id: 3,
            title: 'Кнопка',
            linkTo: '/main/button',
            sessionTime: [],
        },
        {
            id: 4,
            title: 'Список иконок',
            linkTo: '/main/icons-list',
            sessionTime: [],
        },
        {
            id: 5,
            title: 'Текст',
            linkTo: '/main/text',
            sessionTime: [],
        },
    ],
    activeTab: null,
    activeTabOpenTime: null,
};

const SET_ACTIVE_TAB = 'SET_ACTIVE_TAB';
const SET_ACTIVE_TAB_OPEN_TIME = 'SET_ACTIVE_TAB_OPEN_TIME';
const REORDER_TABS = 'REORDER_TABS';
const SET_SESSION_TIME = 'SET_SESSION_TIME';


const setActiveTab = id => ({ type: SET_ACTIVE_TAB, payload: id });
const setActiveTabOpenTime = time => ({ type: SET_ACTIVE_TAB_OPEN_TIME, payload: time });
const reorderTabs = tabs => ({ type: REORDER_TABS, payload: tabs });
const setSessionTime = (name, time) => ({ type: SET_SESSION_TIME, name, payload: time });

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case SET_ACTIVE_TAB:
        return { ...state, activeTab: action.payload };
    case SET_ACTIVE_TAB_OPEN_TIME:
        return { ...state, activeTabOpenTime: action.payload };
    case REORDER_TABS:
        return { ...state, tabs: action.payload };
    case SET_SESSION_TIME:
        const newTabs = state.tabs.map((tab) => {
            if (tab.linkTo.includes(action.name)) {
                return { ...tab, sessionTime: [...tab.sessionTime, action.payload] };
            }
            return tab;
        });
        return { ...state, tabs: newTabs };
    default:
        return state;
    }
};

export { reducer, setActiveTab, setActiveTabOpenTime, reorderTabs, setSessionTime };
