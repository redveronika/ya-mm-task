const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

function convertMS(ms) {
    const days = Math.floor(ms / DAY);
    ms -= days * DAY;

    const hours = Math.floor(ms / HOUR);
    ms -= hours * HOUR;

    const minutes = Math.floor(ms / MINUTE);
    ms -= minutes * MINUTE;

    const seconds = Math.floor(ms / SECOND);
    return { days, hours, minutes, seconds };
}

export { convertMS, SECOND, MINUTE, HOUR, DAY };
