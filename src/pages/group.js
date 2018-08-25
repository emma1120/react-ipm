import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Footer from '@/components/Footer'


export class GroupPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue:'',
            data:[],
            searchData:'',
            is_search:false,
            is_no_record:true,
        }
    }
    componentDidMount() {
        document.body.scrollTop = '0px';
        document.title = '会员';  
        
    }
    render () {
        const userinfo = {}
        const is_level = 2
        return ( 
             <div className="page-bg">
                 <form onSubmit={this.submitHandle}>
                    <div className="search-input-header">
                        {/* <div className="search-input-box">
                            <i className="iconfont icon-search"></i>
                            <input 
                            type="search"
                            placeholder="请输入ID号查询"
                            onChange={this.ChangeHandle.bind(this)}
                            onKeyUp={this.KeyupHandle.bind(this)}
                            className="search-input"
                            value={this.state.searchValue}/>
                            <em onClick={this.clearSearchValue} style={{display:this.state.searchValue !=='' ? 'block' :'none'}}>&times;</em>
                        </div>
                        <span className="search-cancle" onClick={this.changeLevelPlayerHandle}>取消</span> */}
                    </div>
                  </form>  
                    <div style={{display:this.state.is_search? 'none' :'block'} }>
                        <div className="user-info-box">
                            <div className="mg-img-left"><img className="my-img" alt="头像" src={userinfo.face}/></div>
                            <div className="user-name">{userinfo.agentName}</div>
                            <div className="totol-tip"><span>总计用户：{userinfo.memberNum}</span><span>今日新增：{userinfo.memberOfToday}</span></div>
                        </div>
                        <ul className="tab-nav">
                           
                        </ul>
    
                        <div className="group-list-wrapper">
                               
                        </div>
                    </div>
                    <div style={{display:this.state.is_search? 'block' :'none'} }>
                             {/* <GroupMembersListItem data={this.state.serchData}></GroupMembersListItem> */}
                    </div>
                    <Footer page={'group'}></Footer>
                </div>
        )
    }
}

export function GroupPageState(state, props) {

    return  {
        userinfo: state.userinfo
    }
}


export function GroupPageDispatch(dispatch, props) {
    return {

    }

}


export default connect(GroupPageState, GroupPageDispatch)(GroupPage);
