//创建本身需要的action
import { ADD_ITEM, DEL_ITEM, CHANGE_VALUE } from './actionType'
export const changeValueAC = inputValue => {
    return dispatch => {
        dispatch({
            type: CHANGE_VALUE,
            inputValue
        })
    }
}
export const addItemAc = () => {
    return {
        type: ADD_ITEM
    }
}
export const delItemAc = index => {
    return {
        type: DEL_ITEM,
        index
    }
}