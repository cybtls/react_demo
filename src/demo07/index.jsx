import React from 'react'
import {HashRouter as Router,Route,Link} from 'react-router-dom'
import AboutC from './about'
import Mainc from './main'

function RouterC(){
    return(
        <Router basename='/RouterC'>
            <div>我是RouterC页面</div>
            <Link to='/AboutC/838182202'>去about页面</Link>
            <Link to='/Mainc?id=838182202'>去mian页面</Link>
            <Route path='/AboutC/:id' component={AboutC}></Route>
            <Route path='/Mainc' component={Mainc}></Route>
        </Router>
    )
}
export default RouterC