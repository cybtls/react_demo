import React from 'react'

function MainC(props){
    console.log(props.location.search)
    const id = GetQueryValue1(props.location.search,'id')
    return(
        <div>
            <h1>我是Main页面</h1>
            <div>我通过路由传参过来的：id是{id}</div>
        </div>
    )
}
function GetQueryValue1(url,queryName,) {
    let reg = new RegExp("(^|&)" + queryName + "=([^&]*)(&|$)", "i");
    let r = url.substr(1).match(reg);
    if ( r != null ){
       return decodeURI(r[2]);
    }else{
       return null;
    }
 }
export default MainC