//主界面路由组件
import React,{Component} from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

import LaobanInfo from '../laoban-info/laoban-info'
import DashenInfo from '../dashen-info/dashen-info'

class Main extends Component {
    
    render () {
        //检查用户是否登录，如果没有登录，自动重定向到登录界面
        const {user}=this.props //这里是1、
        if(!user._id){
            return <Redirect to='/login' />
        }


        return(
            <div>
                <Switch>
                    <Route path="/laobaninfo" component={LaobanInfo} />
                    <Route path="/dasheninfo" component={DashenInfo} />
                </Switch>
            </div>
        )
    }
}

export default connect(
    state=>({user:state.user}) //这里是1
)(Main)