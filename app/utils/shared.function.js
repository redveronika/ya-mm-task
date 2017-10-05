const PARSE_DATE = (time) => {
    const date = new Date(time);
    const hours = date.getHours() - 3;
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return { hours, minutes, seconds };
};

export { PARSE_DATE };
