//It is simple example of memoization, 
//it is useful to store some actions returned value because it can take long time to do the same action.
//Using closure to make private cache variable from global state.
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
