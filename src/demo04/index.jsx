import React, { Component } from 'react'

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            todoList: [
                { id: 1, text: '学习Vue' },
                { id: 2, text: '学习React' },
                { id: 3, text: '学习Angular' },
            ]
        }
        this.changeValueFunc = this.changeValueFunc.bind(this)
        this.addNewListItem = this.addNewListItem.bind(this)
        this.delItem = this.delItem.bind(this)
    }
    changeValueFunc(e) {
        const inputValue = e.target.value
        this.setState({
            inputValue
        })
    }
    addNewListItem() {
        if (!this.state.inputValue) {
            return;
        }
        const value = this.state.inputValue;
        this.setState({
            todoList: [...this.state.todoList, { id: this.state.todoList.length + 1, text: value }],
            inputValue: ''
        })
    }
    delItem(index) {
        let newList = this.state.todoList
        newList.splice(index, 1)
        this.setState({
            todoList: newList
        })
    }
    render() {
        let { inputValue, todoList } = this.state
        return (
            <div>
                <input type="text" value={inputValue} onChange={this.changeValueFunc} />
                <button onClick={this.addNewListItem}>放开我，我还要学习</button>
                <ul>
                    {/* 遍历 */}
                    {todoList.map(
                        // 传参用的方法
                        (item, index) => <li onClick={() => { this.delItem(index) }} key={item.id}>{item.text}</li>
                    )}
                </ul>
                {
                    todoList.length >= 5 ? <h1>上号了，别学了</h1> : null
                }
            </div>
        );
    }
}
export default TodoList;