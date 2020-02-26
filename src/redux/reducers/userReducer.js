import { handleActions } from 'redux-actions';
import * as actionTypes from "../action/actionTypes";

const initialState = {
  users: [],
  error: ""
};

const userReducer = handleActions({
  
  [actionTypes.USER.SUCCESS]: (state, action) => {
    console.log(action)
    const { users } = action
    console.log(users);
    return {
        ...state,
        users,
    }
},

[actionTypes.USER.ERROR]: (state, action) => {
    const { error } = action
    return {
        ...state,
        error,
    }
}

}, initialState);


export default userReducer;
