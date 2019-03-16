import { combineReducers } from 'redux-immutable';
import direction from './directions/index';

const rootReducer = combineReducers({
    direction
})

export default rootReducer