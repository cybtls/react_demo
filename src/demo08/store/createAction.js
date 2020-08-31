//创建本身需要的action
import { ADD_NUM, SUB_NUM, ZERO_NUM } from './actionType'
export const addNumAc = () => {
    return {
        type: ADD_NUM
    }
}
export const subNumAc = () => {
    return {
        type: SUB_NUM
    }
}
export const zeroNumAc = () => {
    return {
        type: ZERO_NUM
    }
}