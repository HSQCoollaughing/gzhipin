//包含n个action creator
//异步action
//同步action

import {
    AUTH_SUCCESS,
    ERROR_MSG,
    RECEIVE_USER,
    RESET_USER
} from './action-types'

import {
    reqRegister,
    reqLogin,
    reqUpdateUser
} from '../api/index'

//一个action-type对应一个同步action
//授权成功的同步action
const authSuccess=(user)=>({type:AUTH_SUCCESS,data:user})
//错误提示信息的同步action
const errorMsg=(msg)=>({type:ERROR_MSG,data:msg})
//接收用户的同步action
const receiveUser=(user)=>({type:RECEIVE_USER,data:user})
//重置用户的同步action
const resetUser=(msg)=>({type:RECEIVE_USER,data:msg})

//注册异步action
export const register=(user)=>{
    const {username,password,password2,type}=user;
    //表单的前台验证，如果不通过，分发一个errorMsg的同步action
    if(!username){
        return errorMsg('用户名必须指定！');
    }
    else if(password!==password2){
        return errorMsg("2次密码要一致！");
    }

    //表单数据合法，返回一个发ajax请求的异步action函数



    // return dispatch=>{
    //     //发送注册的异步ajax请求
    //     const promise=reqRegister(user);
    //     promise.then(response=>{
    //         const result=response.data
    //     })
    // }

    //注意，上面的写法是正确的，下面换一种简单的写法。上面的reqRegister(user)返回的是一个promise，需要.then才能取到返回的对象
    //下面这种写法，直接就能取到返回的对象
    return async dispatch=>{
        //发送注册的异步ajax请求
        const response=await reqRegister(user);
        const result=response.data;

        if(result.code===0){//注册成功
            //分发成功的同步action，也就是授权成功的同步action
            dispatch(authSuccess(result.data))
        }
        else{//注册失败
            //分发失败的同步action，也就是错误提示信息的同步action
            dispatch(errorMsg(result.msg))
        }
    }
}

//登录异步action
export const login=(user)=>{

    const {username,password}=user;
    //表单的前台验证，如果不通过，分发一个errorMsg的同步action
    if(!username){
        return errorMsg('用户名必须指定！');
    }
    else if(!password){
        return errorMsg("密码必须指定！");
    }





    return async dispatch=>{
        const response=await reqLogin(user);
        const result=response.data;
        if(result.code===0){//登录成功
            //分发成功的同步action，也就是授权成功的同步action
            dispatch(authSuccess(result.data))
        }
        else{//登录失败
            //分发失败的同步action，也就是错误提示信息的同步action
            dispatch(errorMsg(result.msg))
        }
    }
}

//更新用户异步action
export const updateUser=(user)=>{
    return async dispatch=>{
        const response=await reqUpdateUser(user)
        const result=response.data
        if(result.code===0){//更新成功
            //分发同步action
            dispatch(receiveUser(result.data))
        }
        else{//更新失败
            dispatch(resetUser(result.msg))
        }
    }
}