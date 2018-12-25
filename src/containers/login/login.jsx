//登录路由组件
//注册路由组件
import React,{Component} from 'react'

//按需引入antd-mobile中的组件
import {
    NavBar,
    WingBlank,
    List,
    InputItem,
    WhiteSpace,
    Button
} from 'antd-mobile'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

import {login} from '../../redux/actions'



import Logo from '../../components/logo/logo'


// const ListItem=List.Item

class Login extends Component {
    state={
        username:'',//用户名
        password:'',//密码
        
    }
    //点击登录
    login=()=>{
        console.log(this.state);
        this.props.login(this.state)
    }
    //当输入框内容发生改变，处理输入数据的改变：更新对应的状态
    handleChange=(name,val)=>{
        //更新状态
        this.setState({
            [name]:val //属性名不是name，而是name变量的值
        })
    }
    //点击，跳转到注册页
    toRegister=()=>{
        this.props.history.replace('/register') //会替换掉原来的页面，你回不去原来的了
        // this.props.history.push("/register") //并不会替换掉原来的页面，可以回去
        
    }

    render () {

        const {msg,redirectTo} =this.props.user
        if(redirectTo){
            return <Redirect to={redirectTo} />
        }


        return(
            <div>
                <NavBar>硅&nbsp;谷&nbsp;直&nbsp;聘</NavBar>
                <Logo/>
                <WingBlank>{/*两翼留白*/}
                    <List> 
                        {msg?<div className="error-msg">{msg}</div>:null}
                        <WhiteSpace/>{/*上下留白*/}
                        <InputItem placeholder='请输入用户名' onChange={val=>{this.handleChange('username',val)}}>用户名：</InputItem>
                        <WhiteSpace/>
                        <InputItem placeholder='请输入密码' type="password" onChange={val=>{this.handleChange('password',val)}}>密&nbsp;&nbsp;&nbsp;码：</InputItem>
                        <WhiteSpace/>
                        <Button type="primary" onClick={this.login}>登&nbsp;&nbsp;&nbsp;录</Button>
                        <WhiteSpace/>
                        <Button onClick={this.toRegister}>还没有账户</Button>
                    </List>
                </WingBlank>
            </div>
        )
    }
}

export default connect(
    state=>({user:state.user}),
    {login}
)(Login)