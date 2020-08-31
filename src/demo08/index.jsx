import React,{Component} from 'react'
import {addNumAc,subNumAc,zeroNumAc} from './store/createAction'
import store from '../store'

class CountC extends Component {
    constructor(props) {
        super(props);
        //stroe获取值的方法
        this.state = store.getState().countReducer;
        //当stroe数据变化时触发
        store.subscribe(()=>{
            this.setState( store.getState().countReducer) 
        })
    }
    addFunc(){
        // 派发
        store.dispatch(addNumAc())
    }
    subFunc(){
        store.dispatch(subNumAc())
    }
    zeroFunc(){
        store.dispatch(zeroNumAc())
    }
    render() { 
        return ( 
            <div>
                <div>{this.state.count}</div>
                <button onClick={this.addFunc.bind(this)}>+1</button>
                <button onClick={this.subFunc.bind(this)}>-1</button>
                <button onClick={this.zeroFunc.bind(this)}>归0</button>
            </div>
         );
    }
}
export default CountC;