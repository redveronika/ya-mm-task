// Команды, которые доступны пользователю для ввода в консоль (без параметров).
const SELECT_TAB = 'selectTab';
const SHOW_STAT = 'showStat';
const SWAP_TABS = 'swapTabs';
const SET_RATING_BEST = 'setBest';
const SET_RATING_SCORE = 'setScore';
const SET_RATING_ACTIVE_COLOR = 'setActiveColor';
const SET_RATING_INACTIVE_COLOR = 'setInactiveColor';
const SET_PROGRESS = 'setProgress';
const COMMANDS_ARRAY = [
    SELECT_TAB,
    SHOW_STAT,
    SWAP_TABS,
    SET_RATING_BEST,
    SET_RATING_SCORE,
    SET_RATING_ACTIVE_COLOR,
    SET_RATING_INACTIVE_COLOR,
    SET_PROGRESS,
];

function parseCommand(command) {
    let strArgs = null;
    let strCommand = null;
    const commandsPipe = COMMANDS_ARRAY.join('|');
    // Проверяем, что во введённой команде присутствует
    // имя команды из перечня, а также скобки
    // с необязательными аргументами внутри.
    const re = new RegExp(`
    (${commandsPipe})
    \\(
    ([^()]+)*
    \\)$
    `);
    const matchCommand = command.match(re);
    if (matchCommand) {
        // Записываем имя команды
        strCommand = matchCommand[1];
        // Выносим аргументы команды в отдельную переменну,
        // если аргументов нет — записываем пустую строку
        strArgs = matchCommand[2] || '';
    }
    if (command === '') {
        strCommand = command;
    }
    return { strArgs, strCommand };
}

export {
    parseCommand,
    SELECT_TAB,
    SHOW_STAT,
    SWAP_TABS,
    SET_RATING_BEST,
    SET_RATING_SCORE,
    SET_RATING_ACTIVE_COLOR,
    SET_RATING_INACTIVE_COLOR,
    SET_PROGRESS,
};
