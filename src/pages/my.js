import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';
import '../assets/css/my.scss'; 

export class MyPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    componentDidMount() {
        document.body.scrollTop = '0px';
        document.title = '我的';
    }


    render() {
        const userinfo = {}
        return (
           <div className="page-bg">
               <div className="page-inner">
                <div className="user-info-box m-b-10">
                   <div className="mg-img-left"><img className="my-img" alt="头像" src={userinfo.face}/></div>
                   <div className="text-right">
                       <h3>微信名：{userinfo.agentName}</h3>
                       <h3>游戏id：{userinfo.userId}</h3>
                   </div>
                </div>
                 <ul className="nav-list">
                     <li className="nav-list-item">
                         <span className="left-title">个人资料修改</span>
                         <span className="right-substance"><Link to='/myInfo'><i className="iconfont icon-more "></i></Link></span>
                     </li>
                     <li className="nav-list-item">
                         <span className="left-title">提现</span>
                         <span className="right-substance"><Link to='/cash'><i className="iconfont icon-more "></i></Link></span>
                     </li>
                 </ul>
                 </div>
                <Footer page={'my'}></Footer>
            </div>
        )
    }
}



export function MyPageState(state) {
    return {
        userinfo: state.userinfo
    }
}

export function MyPageDispatch(dispatch) {
    return {
    }
}


export default connect(MyPageState, MyPageDispatch)(MyPage);
