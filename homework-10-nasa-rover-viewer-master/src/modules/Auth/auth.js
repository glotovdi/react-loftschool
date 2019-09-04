import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';

import { addKey } from './actions';

const apiKey = handleActions(
    {
        [addKey]: (_state, action) => action.payload
    },
    null
);

export default combineReducers({
    apiKey
});


// Selectors
export const getIsAuthorized = (state) => (state.auth.apiKey ? true : false);
export const getApiKey = (state) => state.auth.apiKey;