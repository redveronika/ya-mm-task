const initialState = {
    best: 6,
    score: 3,
};

const SET_RATING_SCORE = 'SET_RATING_SCORE';

const setRatingScore = score => ({ type: SET_RATING_SCORE, payload: score });

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case SET_RATING_SCORE:
        return { ...state, score: action.payload };
    default:
        return state;
    }
};

export { reducer, setRatingScore };
