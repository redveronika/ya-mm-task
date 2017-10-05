const initialState = {
    openApp: null,
    activeTabOpen: null,
    ratingSession: [],
    buttonSession: [],
    iconsListSession: [],
    progressBarSession: [],
    textSession: [],
};

const SET_APP_OPEN_TIME = 'SET_APP_OPEN_TIME';
const SET_ACTIVE_TAB_OPEN_TIME = 'SET_ACTIVE_TAB_OPEN_TIME';

const setAppOpenTime = time => ({ type: SET_APP_OPEN_TIME, payload: time });
const setActiveTabOpenTime = time => ({ type: SET_ACTIVE_TAB_OPEN_TIME, payload: time });

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case SET_APP_OPEN_TIME:
        return { ...state, openApp: action.payload };
    case SET_ACTIVE_TAB_OPEN_TIME:
        return { ...state, activeTabOpen: action.payload };
    default: return state;
    }
};

export { reducer, setAppOpenTime, setActiveTabOpenTime };
