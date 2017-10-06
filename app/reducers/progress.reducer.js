const initialState = {
    progress: 80,
};

const SET_PROGRESS = 'SET_PROGRESS';

const setProgress = progress => ({ type: SET_PROGRESS, payload: progress });

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case SET_PROGRESS:
        return { ...state, progress: action.payload };
    default:
        return state;
    }
};

export { reducer, setProgress };
