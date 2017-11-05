const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

// Команды, которые доступны пользователю для ввода в консоль (без параметров).
const SELECT_TAB = 'selectTab';
const SHOW_STAT = 'showStat';
const SWAP_TABS = 'swapTabs';
const SET_RATING_BEST = 'setBest';
const SET_RATING_SCORE = 'setScore';
const SET_RATING_ACTIVE_COLOR = 'setActiveColor';
const SET_RATING_INACTIVE_COLOR = 'setInactiveColor';
const SET_PROGRESS = 'setProgress()';
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

function convertMS(ms) {
    const days = Math.floor(ms / DAY);
    ms -= days * DAY;

    const hours = Math.floor(ms / HOUR);
    ms -= hours * HOUR;

    const minutes = Math.floor(ms / MINUTE);
    ms -= minutes * MINUTE;

    const seconds = ms / SECOND;
    return { days, hours, minutes, seconds };
}

function parseCommand(command) {
    // Проверяем, что в введённой команде присутствуют скобки
    // с необязательными аргументами внутри.
    let strArgs = null;
    let strCommand = null;
    const commandsPipe = COMMANDS_ARRAY.join('|');
    const re = new RegExp(`(?:(${commandsPipe})\\(([^()]+)*\\)$)`);
    if (re.test(command)) {
        // Записываем имя команды
        strCommand = command.match(re)[1];
        // Выносим аргументы команды в отдельную переменную
        strArgs = command.match(re)[3] || '';
    }
    return { strArgs, strCommand };
}

export {
    convertMS,
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
