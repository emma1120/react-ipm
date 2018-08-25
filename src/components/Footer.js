import React, {Component } from 'react';
import {Link} from 'react-router-dom'



export  class Footer extends Component {
    render() {
        const { page } = this.props;
        return (
            <div className="bottom-menu-nav">
                <div className="bottom-menu-content">
                    <Link to="/" className="nav-item">
                        
                            {
                                page == 'home' ?
                                    <div className="active">
                                        <i className="iconfont icon-homefill"></i>
                                        <span className="">主页</span>
                                    </div>
                                    :
                                    <div className="">
                                        <i className="iconfont icon-home"></i>
                                        <span className="">主页</span>
                                    </div>
                            }
                        
                    </Link>
                    <Link to="/record" className="nav-item">
                        
                            {
                                page == 'record' ?
                                    <div className="active">
                                        <i className="iconfont icon-news_hot_fill_light"></i>
                                        <span className="">记录</span>
                                    </div>
                                    :
                                    <div className="">
                                        <i className="iconfont icon-news_hot_light"></i>
                                       <span className="">记录</span>
                                    </div>
                            }
                       
                    </Link>
                    <Link to="/group" className="nav-item">
                        
                            {
                                page == 'groupMen' ?
                                    <div className="active">
                                        <i className="iconfont icon-group_fill"></i>
                                        <span className="">会员</span>
                                    </div>
                                    :
                                    <div className="">
                                        <i className="iconfont icon-group"></i>
                                        <span className="">会员</span>
                                    </div>
                            }
                       
                    </Link>
                    <Link to="/my" className="nav-item">
                       
                            {
                                page == 'my' ?
                                    <div className="active">
                                        <i className="iconfont icon-myfill"></i>
                                        <span className="">我的</span>
                                    </div>
                                    :
                                    <div className="">
                                        <i className="iconfont icon-my"></i>
                                        <span className="">我的</span>
                                    </div>
                            }
                       
                    </Link>
                </div>
            </div>
        )
    }
}

export default Footer