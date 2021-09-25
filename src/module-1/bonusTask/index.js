
const a = {
    i: 0,
    valueOf: () => {
      console.log(a.i);
      return a.i += 1;
    }
  }

  if(a == 1 && a == 2 && a == 3) {
    console.log('Hello World!');
  }