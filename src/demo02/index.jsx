//同样引入React Component可引可不引，不引的话则extends Component要换成 extends React.Component
import React, { Component } from 'react';
class Stateful extends Component {
    constructor(props) {
        super(props);
        //设置初始值
        this.state = {
            count: 0
        }
        //绑定this的第一种写法，在 JavaScript 中，class 的方法默认不会绑定 this。
        //如果你忘记绑定并把它传入了 onClick，当你调用这个函数的时候 this 的值为 undefined。
        this.addFunc = this.addFunc.bind(this)
    }
    componentWillMount() {
        console.log('这里就演示一下生命周期，后面再具体讲讲')
        console.log('componentWillMount111')
    }
    componentDidMount() {
        console.log('componentDidMount222')
    }
    addFunc() {
        // 赋值的一种写法
        this.setState({
            count: this.state.count + 1
        })
    }
    subFunc() {
        // 赋值的另一种写法（下面会讲讲为什么使用这种）
        this.setState((preState) => {
            return {
                count: preState.count - 1
            }
        })
    }
    setZero() {
        this.setState({
            count: 0
        })
    }
    render() {
        return (
            <div>
                <div>我是一个有状态的组件</div>
                <div>{this.state.count}</div>
                <div>
                    <button onClick={this.addFunc}>+1</button>
                    {/* 绑定this的第二种写法 */}
                    <button onClick={this.subFunc.bind(this)}>-1</button>
                    {/* 绑定this的第三种写法 */}
                    <button onClick={() => { this.setZero() }}>归0</button>
                </div>
                <div>我也可以接收父组件传的值：{this.props.text}</div>
            </div>
        );
    }
}
export default Stateful;