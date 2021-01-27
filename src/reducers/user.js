import { SET_TOKEN, SET_USER } from "../actions/userAction";
import { User } from "../models/User";

const initialState = {
    user: User
};

export const user = (state = initialState, action) => {
    
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.user
            };
        case SET_TOKEN:
            return {
                ...state,
                token: action.token
            };
        default:
            return state;
    }
};