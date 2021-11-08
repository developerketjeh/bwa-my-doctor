const { createStore } = require("redux");

const initialState = {
  loading: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.value
      }
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
