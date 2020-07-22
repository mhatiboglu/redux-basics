const initialState = {
  counter: 111,
  results: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - 1,
      };
    case "ADD":
      return {
        ...state,
        counter: state.counter + action.value,
      };
    case "SUB":
      return {
        ...state,
        counter: state.counter - action.value,
      };
    case "STORE_RESULT":
      return {
        ...state,
        //results: state.results.concat({ id: new Date(), value: state.counter }),
        results: [...state.results, { id: new Date(), value: state.counter }],
      };
    case "DELETE_RESULT":
      return {
        ...state,
        counter: state.counter - action.value,
      };
  }
  return state;
};

export default reducer;
