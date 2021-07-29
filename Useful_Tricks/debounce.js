


const debounce = (fn, ms) {
  let timeout;
  return function(...arguments) {
   // we can use fn.apply(this,arguments) when not using arrow function
  const fnCall = () => {fn(...arguments)};
  if(timeout) clearTimeout(timeout);
    timeout = setTimeout(fnCall,ms)
  };
}

function onChange(e) {
console.log(e.target.value)
}

onChange = debounce(onChange, 500);
document.getElementById('search').addEventListener('keyup',onChange);


////////////////////////////////////////////

const debounce = (fn, wait) => {
  let timeoutID;
  return (...arg) => {
    if (timeoutID) clearTimeout(timeoutID);
    timeoutID = setTimeout(() => fn(...arg), wait);
  };
};

const debeounced400 = debounce((fn) => fn(), 400);
export default function App() {

  const onChange = (search) => {
    setSearch(search);

    debeounced400(() => {
      const results = searchAPI(search);
      setResults(results);
    });
  };
 
}
