import { combineReducers } from 'redux';
import commonReducer from './common'
const appReducer = combineReducers({
    commonReducer,
});
export default appReducer;