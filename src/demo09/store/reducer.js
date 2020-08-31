// 处理本身的，不负责其他人的
import { ADD_ITEM, DEL_ITEM, CHANGE_VALUE } from './actionType'
const defaultState = {
    inputValue: '',
    todoList: [
        { id: 1, text: '学习Vue' },
        { id: 2, text: '学习React' },
        { id: 3, text: '学习Angular' },
    ]
}
export const todoListReducer = (state = defaultState, action) => {
    let newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case CHANGE_VALUE: newState.inputValue = action.inputValue;
            return newState;
        case ADD_ITEM:
            if (!newState.inputValue) {
                return newState;
            }
            newState.todoList.push({ id: state.length + 1, text: newState.inputValue })
            newState.inputValue = ''
            return newState;
        case DEL_ITEM: newState.todoList.splice(action.index, 1)
            return newState;
        default: return newState
    }
}
