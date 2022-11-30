import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
// import AuthReducer from "./reducers/auth";
import ClinvarReducer from './reducers/clinvar';

const rootReducer = combineReducers({
  //   auth: AuthReducer,
  clinvar: ClinvarReducer,
  //   user: UserReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
