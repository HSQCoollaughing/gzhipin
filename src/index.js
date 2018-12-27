//入口js 
import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter,Route,Switch} from 'react-router-dom'//引入路由
import Register from './containers/register/register'
import Login from './containers/login/login'
import Main from './containers/main/main'

//引入redux
import {Provider} from 'react-redux'
import store from './redux/store'

//引入全局样式
import './assets/css/index.less'

ReactDOM.render((
    <Provider store={store}>{/*引入redux中的store*/}
        <HashRouter>{/*路由器：只需要在这里引入一次就够了。  路由中的路由不需要引入*/}
            <Switch>{/*  当显示的组件不是同时显示时，需要用到switch。（切换）  */}
                <Route path='/register' component={Register}></Route>
                <Route path='/login' component={Login}></Route>
                <Route component={Main}></Route> {/*默认组件*/}
            </Switch>
        </HashRouter>
    </Provider>
    
),document.getElementById("root"));