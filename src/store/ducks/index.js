import { combineReducers } from 'redux';

import { reducer as meals } from './meals';

const reducers = combineReducers({
  meals,
});

export default reducers;
