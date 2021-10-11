export const cutStrings = (arr = []) => arr.map(item => item.slice(0, [...arr].sort((a,b) => a.length - b.length)[0].length));
