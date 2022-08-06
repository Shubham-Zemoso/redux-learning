const redux = require("redux");
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_ADD = "CAKE_ADD";

function orderCake() {
  return {
    type: CAKE_ORDERED,
    payload: 1,
  };
}

function restockCake(qty) {
  return {
    type: CAKE_ADD,
    payload: qty,
  };
}

// (previousState, action) => newState

const initialState = {
  numOfCakes: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - action.payload,
      };
    case CAKE_ADD:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);
console.log("Initial State", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("pdate state", store.getState())
);

store.dispatch(orderCake());
store.dispatch(restockCake(2));
store.dispatch(restockCake(1));

unsubscribe();

store.dispatch(orderCake());
console.log("current State", store.getState());
