function memoizedAddTo10() {
  let cache = {};
  return function(n) {
    if(n in cache) {
      return cache[n];
    } else {
       cache[n] = n + 10;
      return cache[n];
    }
  }
}
const memoized = memoizedAddTo10();
consol.log(memoized(2));
//12
