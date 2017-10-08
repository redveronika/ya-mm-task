import { reducer } from './../../reducers/progress.reducer';

describe('progress reducer', () => {
    it('should return the initial state', () => {
        expect(
            reducer(undefined, {}),
        ).toEqual({ progress: 80 });
    });
});
