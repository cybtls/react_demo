import React,{Component} from 'react'
class AboutC extends Component {
    constructor(props) {
        super(props);
        console.log(this.props)
    }
    componentWillUnmount(){
        console.log('我是AboutC页面，我被移除了')
    }
    render() { 
        return ( 
            <div>
                <h1>我是AboutC页面</h1>
                <div>我通过路由传参过来的：id是{this.props.match.params.id}</div>
            </div>
            
         );
    }
}
export default AboutC;