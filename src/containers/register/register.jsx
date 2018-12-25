//注册路由组件
import React,{Component} from 'react'

//按需引入antd-mobile中的组件
import {
    NavBar,
    WingBlank,
    List,
    InputItem,
    WhiteSpace,
    Radio,
    Button
} from 'antd-mobile'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'



import {register} from '../../redux/actions'
import Logo from '../../components/logo/logo'

const ListItem=List.Item

class Register extends Component {
    state={
        username:'',//用户名
        password:'',//密码
        password2:'',//确认密码
        type:'laoban',//用户类型名称   大神/老板
    }
    //点击注册
    register=()=>{
        console.log(this.state);
        console.log(this.props);
        this.props.register(this.state);
        
    }
    //当输入框内容发生改变，处理输入数据的改变：更新对应的状态
    handleChange=(name,val)=>{
        //更新状态
        this.setState({
            [name]:val //属性名不是name，而是name变量的值
        })
    }
    //点击已有账户，跳转到登录页
    toLogin=()=>{
        this.props.history.replace('/login') //会替换掉原来的页面，你回不去原来的了
        // this.props.history.push("./login") //并不会替换掉原来的页面，可以回去
        
    }

    render () {
        const {type}=this.state
        const {msg,redirectTo}=this.props.user//这里是2

        if(redirectTo){
            return <Redirect to={redirectTo} />
        }


        return(
            <div>
                <NavBar>硅&nbsp;谷&nbsp;直&nbsp;聘</NavBar>
                <Logo/>
                <WingBlank>{/*两翼留白*/}
                    <List> 
                        {msg?<div className='error-msg'>{msg}</div>:null} {/*这里显示错误信息*/}
                        <WhiteSpace/>{/*上下留白*/}
                        <InputItem placeholder='请输入用户名' onChange={val=>{this.handleChange('username',val)}}>用户名：</InputItem>
                        <WhiteSpace/>
                        <InputItem placeholder='请输入密码' type="password" onChange={val=>{this.handleChange('password',val)}}>密&nbsp;&nbsp;&nbsp;码：</InputItem>
                        <WhiteSpace/>
                        <InputItem placeholder='请输入确认密码' type="password" onChange={val=>{this.handleChange('password2',val)}}>确认密码：</InputItem>
                        <ListItem>
                            <span>用户类型</span>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Radio checked={type==='dashen'} onChange={()=>this.handleChange('type','dashen')}>大神</Radio>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Radio checked={type==='laoban'} onChange={()=>this.handleChange('type','laoban')}>老板</Radio>
                        </ListItem>
                        <WhiteSpace/>
                        <Button type="primary" onClick={this.register}>注&nbsp;&nbsp;&nbsp;册</Button>
                        <WhiteSpace/>
                        <Button onClick={this.toLogin}>已有账户</Button>
                    </List>
                </WingBlank>
            </div>
        )
    }
}

export default connect(
    state=>({user:state.user}),//这里是1
    {register}
)(Register)