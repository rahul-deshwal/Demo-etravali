import { combineReducers } from 'redux';
import home from './home/reducers';
import common from './common/reducers';

const rootReducer = combineReducers({
  home,
  common
});

export default rootReducer;