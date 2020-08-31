import React, { Component } from 'react'

class SetData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.testFunc = this.testFunc.bind(this)
    }
    testFunc() {
        this.setState({ count: this.state.count + 1 });
        this.setState({ count: this.state.count + 1 });
        this.setState({ count: this.state.count + 1 });
    }
    render() {
        return (
            <div>
                this.setState()方法
                <div>{this.state.count}</div>
                <button onClick={this.testFunc}>测试</button>
            </div>
        );
    }
}

export default SetData;