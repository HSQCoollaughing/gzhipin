//redux最核心的管理对象模块
//这里面的代码很固定，以后在哪用都不需要再改了

import {createStore,applyMiddleware } from "redux"
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import reducers from './reducers'

//向外暴露store对象
export default createStore(reducers,composeWithDevTools(applyMiddleware(thunk)))