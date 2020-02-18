import { combineReducers } from 'redux';
import dashboardReducer from './dashboardReducer';
import errorsReducer from './errorsReducer';
import toggleBottomReducer from './toggleBottomReducer';
import toggleRightReducer from './toggleRightReducer';


export default combineReducers({
    dashboard: dashboardReducer,
    toggleBottom: toggleBottomReducer,
    toggleRight: toggleRightReducer,
    errors: errorsReducer
})