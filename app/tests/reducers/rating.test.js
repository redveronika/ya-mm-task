import {
    reducer,
    SET_RATING_SCORE,
    SET_RATING_BEST,
    SET_RATING_ACTIVE_COLOR,
    SET_RATING_INACTIVE_COLOR,
} from './../../reducers/rating.reducer';

describe('rating reducer', () => {
    const initialState = {
        best: 6,
        score: 3,
        activeColor: '#ffe200',
        inactiveColor: 'rgba(0, 0, 0, 0.25)',
    };

    it('should return the initial state', () => {
        expect(
            reducer(undefined, {}),
        ).toEqual(initialState);
    });

    it('should handle SET_RATING_SCORE', () => {
        expect(
            reducer(undefined, { type: SET_RATING_SCORE, payload: 8 }),
        ).toEqual({ ...initialState, score: 8 });
    });

    it('should handle SET_RATING_BEST', () => {
        expect(
            reducer(undefined, { type: SET_RATING_BEST, payload: 10 }),
        ).toEqual({ ...initialState, best: 10 });
    });

    it('should handle SET_RATING_ACTIVE_COLOR', () => {
        expect(
            reducer(undefined, { type: SET_RATING_ACTIVE_COLOR, payload: '#f0f0f0' }),
        ).toEqual({ ...initialState, activeColor: '#f0f0f0' });
    });

    it('should handle SET_RATING_INACTIVE_COLOR', () => {
        expect(
            reducer(undefined, { type: SET_RATING_INACTIVE_COLOR, payload: '#2fe5bf' }),
        ).toEqual({ ...initialState, inactiveColor: '#2fe5bf' });
    });
});
