const parseDate = (time) => {
    const date = new Date(time);
    const hours = date.getUTCHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return { hours, minutes, seconds };
};

export { parseDate };
