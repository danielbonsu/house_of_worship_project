import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { getVersesReducer } from './redux/reducers/GetVersesReducer';

const middleware = thunk;

const rootReducer = combineReducers({
  verses: getVersesReducer,
});

const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(middleware)
);

export default store;
