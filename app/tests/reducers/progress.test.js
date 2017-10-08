import { reducer, SET_PROGRESS } from './../../reducers/progress.reducer';

describe('progress reducer', () => {
    it('should return the initial state', () => {
        expect(
            reducer(undefined, {}),
        ).toEqual({ progress: 80 });
    });

    it('should handle SET_PROGRESS', () => {
        expect(
            reducer(undefined, { type: SET_PROGRESS, payload: 50 }),
        ).toEqual({ progress: 50 });
    });
});
