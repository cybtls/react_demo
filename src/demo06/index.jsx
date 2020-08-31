import React, { useState,useEffect } from 'react'

function HookC() {
    //useState接收一个参数，就是初始值，下面是es6解构赋值的写法，useState()会返回一个数组
    const [count, setCount] = useState(0)
    //es5写法
    //   const countArr = useState(0)
    //   const count = countArr[0]
    //   const setCount = countArr[1]
    useEffect(()=>{
        console.log('加载成功')
    },[count])
    return (
        <div>
            <div>{count}</div>
            <button onClick={() => { setCount(count + 1) }}>+1</button>
            <button onClick={() => { setCount(count - 1) }}>-1</button>
            <button onClick={() => { setCount(0) }}>归0</button>
        </div>
    )
}
export default HookC
