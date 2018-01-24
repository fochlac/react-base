function fill(val, n) {
    return ('0'.repeat(n) + val).slice(-n);
}

export const formatDate = (date) => {
    const src = new Date(date);

    return `${fill(src.getDate(), 2)}.${fill(src.getMonth() + 1, 2)}.${fill(src.getFullYear(), 4)}`;
}

export const formatDateTime = (date) => {
    const src = new Date(date);

    return `${fill(src.getDate(), 2)}.${fill(src.getMonth() + 1, 2)}.${fill(src.getFullYear(),4)} - ${fill(src.getHours(), 2)}:${fill(src.getMinutes(), 2)}`;
}