export const debounce = (fn, delay = 0) => {
  let timeout = null;

  return function () {
    const fnCall = () => fn.apply(this, arguments);
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = null;
      console.log(fnCall())
    }, delay)
  };
}