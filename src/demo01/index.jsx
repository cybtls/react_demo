//使用jsx的写法必须引入React,Fragment时非必须，Fragment就类似一个占位的，在react渲染到浏览器时，Fragment并不会渲染出来
import React, { Fragment } from 'react';
//所有组件必须以大写字母开头 这里写小写其实也可以，引入时用大写引入就可以，不然react会将小写开头的组件当成原生html标签
function Sateless(props) {
    return (
        //最外层必须只有一个根元素-和Vue的差不多
        <Fragment>
            <div>我就是一个没牌面无状态组件</div>
            {/* 这种是jsx的注释写法
                props是从父组件接收的数据，这里其实叫什么都可以，只是约定俗成叫这个罢了
            */}
            <div>{props.num}</div>
            <div>{props.text}</div>
        </Fragment>
    )
}
//记得导出
export default Sateless;