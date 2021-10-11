export const weirdString = (str = "") => str.split(' ').map(item => item.split('').map((char, index, arr) => index !== arr.length - 1 ? char.toUpperCase() : char).join('')).join(' ');
