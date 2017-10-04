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
    activeTab: 1,
};

const SET_ACTIVE_TAB = 'SET_ACTIVE_TAB';

const setActiveTab = id => ({ type: SET_ACTIVE_TAB, payload: id });

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case SET_ACTIVE_TAB:
        return { ...state, activeTab: action.payload };
    default:
        return state;
    }
};

export { reducer, setActiveTab };
