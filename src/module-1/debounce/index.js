export const debounce = (fn, delay = 0) => {
    let timeout = true;
    return function () {
        const fnCall = () => {
            timeout = true;
            console.log(fn.apply(this, arguments))
            return fn.apply(this, arguments);
        }
        if (timeout) {
            timeout = false;
            setTimeout(fnCall, delay)
        }
    };
}
