import { combineReducers } from 'redux';
import dashboardReducer from './dashboardReducer';
import errorsReducer from './errorsReducer';

export default combineReducers({
    dashboard: dashboardReducer,
    errors: errorsReducer
})