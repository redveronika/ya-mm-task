const initialState = {
    commands: [],
};

const ADD_COMMAND = 'ADD_COMMAND';

const addCommand = command => ({ type: ADD_COMMAND, payload: command });

// Максимальное количество команд для хранения в истории
const maxCommandsInHistory = 10;

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case ADD_COMMAND:
        const commands = [...state.commands, action.payload];
        if (commands.length === maxCommandsInHistory + 1) {
            commands.shift();
        }
        return { ...state, commands };
    default:
        return state;
    }
};

export { reducer, addCommand, ADD_COMMAND };
