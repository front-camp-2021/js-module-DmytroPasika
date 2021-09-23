export const debounce = (fn, delay = 0) => {
    let timeout;
    return function () {
        const fnCall = () => { 
            console.log(fn.apply(this, arguments))
        }
        clearTimeout(timeout);
        timeout = setTimeout(fnCall, delay)
    };
}
