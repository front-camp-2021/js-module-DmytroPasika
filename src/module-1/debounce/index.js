export const debounce = (fn, delay = 0) => {
  let timeout = undefined;

  return function () {
    const fnCall = () => fn.apply(this, arguments);
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = undefined;
      console.log(fnCall())
    }, delay)
  };
}