import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { routerReducer } from 'react-router-redux'

// Centralized application state
// For more information visit http://redux.js.org/
const mainReducer = (state = {}, action) => {
  // TODO: Add action handlers (aka "reduces")
  switch (action.type) {
    case 'COUNT':
      return { ...state, count: 0 };
    default:
      return state;
  }
};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(mainReducer, composeEnhancers(applyMiddleware(thunk)));

// Add the reducer to your store on the `routing` key
const store = createStore(
  combineReducers({
    mainReducer,
    routing: routerReducer
  }),
  composeEnhancers()
);

export default store