const initialState = {
    commands: [],
};

const ADD_COMMAND = 'ADD_COMMAND';

const addCommand = command => ({ type: ADD_COMMAND, payload: command });

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case ADD_COMMAND:
        const newCommands = [...state.commands, action.payload];
        const commands = newCommands.length > 10 ?
            newCommands.slice(newCommands.length - 10, newCommands.length) :
            newCommands;
        return { ...state, commands };
    default:
        return state;
    }
};

export { reducer, addCommand };
