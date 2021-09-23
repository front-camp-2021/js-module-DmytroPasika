export const splitAndMerge = (str = "", separator = "") => str.split(' ').map(item => item.split('').join(separator)).join(' ');
