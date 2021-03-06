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

// Проверяем, что во введённой команде присутствует
// имя команды из перечня, а также скобки
// с необязательными аргументами внутри.
function parseCommand(command) {
    const argsArray = [];
    let strCommand = null;
    const commandsPipe = COMMANDS_ARRAY.join('|');

    const re = new RegExp(
        // 1 группа: собираем имена доступных команд в пайп
        `(${commandsPipe})` +

        // проверяем наличие открывающей скобки перед аргументами
        '\\(' +

        // 2 группа: парсим аргументы команды, проверяем,
        // что содержимое не равно ( или ), минимальное кол-во символов — 1
        '([^()]+)*?' +

        // проверяем наличие закрывающей скобки после аргументов
        '\\)$',
    );

    const matchCommand = command.match(re);
    if (matchCommand !== null) {
        // Записываем имя команды
        strCommand = matchCommand[1];

        // Выносим аргументы команды в отдельную переменную
        if (typeof matchCommand[2] !== 'undefined') {
            argsArray.push(...matchCommand[2].replace(/['"]/g, '').split(/,\s*/));
        }
    }

    // Для случая с пустым вводом
    if (command === '') {
        strCommand = command;
    }
    return { argsArray, strCommand };
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
