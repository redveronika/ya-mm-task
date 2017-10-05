const initialState = {
    best: 6,
    score: 3,
    activeColor: '#ffe200',
    inactiveColor: 'rgba(0, 0, 0, 0.25)',
};

const SET_RATING_SCORE = 'SET_RATING_SCORE';
const SET_RATING_BEST = 'SET_RATING_BEST';
const SET_RATING_ACTIVE_COLOR = 'SET_RATING_ACTIVE_COLOR';
const SET_RATING_INACTIVE_COLOR = 'SET_RATING_INACTIVE_COLOR';

const setRatingScore = score => ({ type: SET_RATING_SCORE, payload: score });
const setRatingBest = best => ({ type: SET_RATING_BEST, payload: best });
const setRatingActiveColor = color => ({ type: SET_RATING_ACTIVE_COLOR, payload: color });
const setRatingInactiveColor = color => ({ type: SET_RATING_INACTIVE_COLOR, payload: color });

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case SET_RATING_SCORE:
        return { ...state, score: action.payload };
    case SET_RATING_BEST:
        return { ...state, best: action.payload };
    case SET_RATING_ACTIVE_COLOR:
        return { ...state, activeColor: action.payload };
    case SET_RATING_INACTIVE_COLOR:
        return { ...state, inactiveColor: action.payload };
    default:
        return state;
    }
};

export { reducer, setRatingScore, setRatingBest, setRatingActiveColor, setRatingInactiveColor };
