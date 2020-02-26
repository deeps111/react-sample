import React from 'react'
import { createAction } from 'redux-actions';
import * as actionTypes from './actionTypes';

export const userAction = createAction(actionTypes.USER.ACTION);

/*const userAction = () => { 
    // This is action creator function
       return(
           <>
           type : "USER_ACTION_SUCCESS"
           </>
       )
} */

//export default userAction;