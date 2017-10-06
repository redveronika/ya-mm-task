import { combineReducers } from 'redux';
import { reducer as tabs } from './tabs.reducer';
import { reducer as console } from './console.reducer';
import { reducer as rating } from './rating.reducer';

export default combineReducers({
    tabs,
    console,
    rating,
});
