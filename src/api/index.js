//包含了n个接口请求的函数的模块
//函数返回值为：promise

import ajax from './ajax'

//注册接口
export const reqRegister=(user)=>ajax('./register',user,'POST') //这里就是请求当前网站端口,然后在package.json中配置代理将请求转发到localhost:4000
//登录接口
// export const reqLogin=(user)=>ajax('./login',user,'POST')   也可以使用下面这种写法。就是把需要传的参数对象直接写出来
export const reqLogin=({username,password})=>ajax('./login',{username,password},'POST')
//更新用户接口
export const reqUpdateUser=(user)=>ajax('/update',user,'POST')
