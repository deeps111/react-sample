
import { defineAction } from 'redux-define'
import { SUCCESS, PENDING, ERROR } from '../../constants'

export const USER = defineAction('USER', [SUCCESS, PENDING, ERROR]);

//export default actionTypes;