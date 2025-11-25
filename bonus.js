var createCounter = function (init) {
  let curr = init;
  return {
    increment: () => ++curr,
    decrement: () => --curr,
    reset: () => (curr = init),
  };
};
counter = createCounter(5);
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.decrement());
console.log(counter.reset());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.decrement());
