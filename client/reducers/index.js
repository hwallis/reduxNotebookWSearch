import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import notes from './notes';
import flash from './flash';

const rootReducer = combineReducers({
  routing: routerReducer,
  notes,
  flash
});

export default rootReducer;
