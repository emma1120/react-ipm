import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import moment from 'moment'
import Footer from '@/components/Footer'
import DatePicker from 'react-mobile-datepicker'

import '../assets/css/record.scss'

const oneDateBefore = new Date( new Date().getTime()- 24*60*60*1*1000) //  1天前
export class RecordPage extends Component {
  constructor(props){
      super (props) ;
      this.state = {
          startDay: oneDateBefore,
          endDay: new Date(),
          isOpenStart: false,
          isOpenEnd: false,
          data: [],
          is_no_record: true,
          hasMore: false,
          isLoadingMore: false,
          page:0,
      }   
  }
  componentDidMount(){
      document.body.scrollTop = '0px'
      document.title = '我的'
  }
  handleClickStart = () => {
    this.setState({ isOpenStart: true });
}

handleCancelStart = () => {
    this.setState({ isOpenStart: false });
}

handleSelectStart = (startDay) => {
    this.setState({ startDay, isOpenStart: false,page:0 });

    // let startTime=moment(startDay).format("YYYY-MM-DD");
    // let endTime=moment(this.state.endDay).format("YYYY-MM-DD");
    // let index = 0;
    // this.loadExtractionLogs(startTime,endTime,index);
}
handleClickEnd = () => {
    this.setState({ isOpenEnd: true });
}

handleCancelEnd = () => {
    this.setState({ isOpenEnd: false });
}

handleSelectEnd = (endDay) => {
    if(moment(endDay).format("YYYY-MM-DD") < moment(this.state.startDay).format("YYYY-MM-DD")){
        // Toast.info("查询结束时间不能小于开始时间，请重新输入", 1);
    }else{
       this.setState({ endDay, isOpenEnd: false});

    //    let startTime=moment(this.state.startDay).format("YYYY-MM-DD");
    //    let endTime=moment(endDay).format("YYYY-MM-DD");
    //    let index = 0;
    //    this.loadExtractionLogs(startTime,endTime,index);
    }
}
  render(){
      const ResultTable= ''
    return (
        <div className="page-bg bg-white"> 
                <div className="input-data-box">
                     <div className="input-data-box-item">
                      <a  className="serch-time" onClick={this.handleClickStart} ><input value={moment(this.state.startDay).format('YYYY-MM-DD')} readOnly/>
                      <i className="iconfont icon-moreunfold"></i>
                      </a>
				     <DatePicker
					  value={this.state.startDay}
					  isOpen={this.state.isOpenStart}
					  onSelect={this.handleSelectStart}
                      onCancel={this.handleCancelStart}
                      max={new Date()}
                      />
                    </div>
                     <div className="input-data-box-label">至</div>
                     <div className="input-data-box-item">
                     <a  className="serch-time" onClick={this.handleClickEnd} ><input value={moment(this.state.endDay).format('YYYY-MM-DD')} readOnly/>
                     <i className="iconfont icon-moreunfold"></i>
                     </a>
				     <DatePicker
					  value={this.state.endDay}
					  isOpen={this.state.isOpenEnd}
					  onSelect={this.handleSelectEnd}
                      onCancel={this.handleCancelEnd}
                      max={new Date()}
                      />
                    </div>
               </div>
                <ul className="tab-nav">
                    <li className="tab-nav-item active"><Link to="/record">分成记录</Link></li>
                    <li className="tab-nav-item"><Link to="/record_out">提现记录</Link></li>   
                </ul>
                <div className="record-list-wrapper">
                     {
                        ResultTable            
                     }
                </div>
                <Footer page={'record'}></Footer>
            </div>
    )
  }
}

export function RecordPageState(state, props){
    return {}
}
export function RecordPageDispatch(dispach, props){
    return {}
}

export default connect(RecordPageState, RecordPageDispatch)(RecordPage)