import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux'
import router from '@/router/router'
import configureStore from './redux/store/store'
import registerServiceWorker from './registerServiceWorker';

//样式引入
import './assets/css/common.scss';
import './assets/css/base.css';

//iconfont 
import './assets/css/iconfont/iconfont.css'

// 创建Redux的store 对象
const store = configureStore()
store.subscribe(() => { //监听state变化
    //console.log(store.getState())
});
render((
    <Provider store = {store} >{router}</Provider>
),document.getElementById('root'))
registerServiceWorker();
