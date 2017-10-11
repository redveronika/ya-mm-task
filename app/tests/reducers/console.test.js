import { reducer, ADD_COMMAND } from './../../reducers/console.reducer';

describe('console reducer', () => {
    const initialState = {
        commands: [],
    };

    it('should return the initial state', () => {
        expect(
            reducer(undefined, {}),
        ).toEqual(initialState);
    });

    it('should handle ADD_COMMAND', () => {
        expect(
            reducer(undefined, { type: ADD_COMMAND, payload: 'setProgress(60)' }),
        ).toEqual({ commands: [...initialState.commands, 'setProgress(60)'] });
    });
});
