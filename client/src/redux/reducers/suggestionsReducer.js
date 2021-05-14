import { SUGGES_TYPES } from '../actions/suggestionsAction'

const initialState = {
    loading: false,
    users: []
}


const suggestionsReducer = (state = initialState, action) => {
    switch (action.type){
        case SUGGES_TYPES.LOADING:
            return {
                ...state,
                loading: action.payload
            };
        case SUGGES_TYPES.GET_USERS:
            return {
                ...state,
                users: action.payload.users
            };
        default:
            return state;
    }
}

export default suggestionsReducer
