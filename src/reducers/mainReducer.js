import { combineReducers } from 'redux';
import dashboardReducer from './dashboardReducer';
import errorsReducer from './errorsReducer';
import toggleBottomReducer from './toggleBottomReducer';
import toggleRightReducer from './toggleRightReducer';
import toggleOptionReducer from './toggleOptionReducer';


export default combineReducers({
    dashboard: dashboardReducer,
    toggleOption: toggleOptionReducer,
    toggleBottom: toggleBottomReducer,
    toggleRight: toggleRightReducer,
    errors: errorsReducer
})