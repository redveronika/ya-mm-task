const initialState = {
    sessionTime: [],
};

const SET_TIME_OPEN = 'SET_TIME_OPEN';

const setSessionTime = time => ({ type: SET_TIME_OPEN, payload: time });

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case SET_TIME_OPEN:
        return { ...state, sessionTime: [...state.sessionTime, action.payload] };
    default:
        return state;
    }
};

export { reducer, setSessionTime };
