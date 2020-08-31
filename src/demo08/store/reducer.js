// 处理本身的，不负责其他人的
import { ADD_NUM, SUB_NUM, ZERO_NUM } from './actionType'
const defaultState = {
    count: 0
}
export const countReducer = (state = defaultState, action) => {
    let newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case ADD_NUM: newState.count = state.count + 1;
            return newState;
        case SUB_NUM: newState.count = state.count - 1;
            return newState;
        case ZERO_NUM: newState.count = 0;
            return newState;
        default: return newState
    }
}
