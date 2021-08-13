function useReducer(reducer, initialState) {
 const [state, setState] = useState(initialState);

 return  [state, () => {
  const newState = reducer(state,action);
  setState(newState);
 }
}
