import React, { Component } from 'react'
import {connect} from 'react-redux'
import {changeValueAC,addItemAc,delItemAc} from './store/createAction'

class TodoList extends Component {
    render() {
        let { inputValue, todoList } = this.props
        return (
            <div>
                <input type="text" value={inputValue} onChange={this.props.changeValueFunc} />
                <button onClick={this.props.addNewListItem}>放开我，我还要学习</button>
                <ul>
                    {todoList.map(
                        (item, index) => <li onClick={() => { this.props.delItem(index) }} key={item.id}>{item.text}</li>
                    )}
                </ul>
                {
                    todoList.length >= 5 ? <h1>上号了，别学了</h1> : null
                }
            </div>
        );
    }
}
const mapStateToProps = (state)=>{
    let {inputValue,todoList} = state.todoListReducer
    return {
        inputValue,todoList
    }
}
const mapDispatchToProps=(dispatch,ownProps)=>{
    return {
        changeValueFunc(e) {
            const inputValue = e.target.value
            dispatch(changeValueAC(inputValue))
        },
        addNewListItem() {
            dispatch(addItemAc());
        },
        delItem(index) {
            dispatch(delItemAc(index));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);