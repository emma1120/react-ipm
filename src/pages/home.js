import React, {Component} from 'react'
import {connect} from 'react-redux'
import echarts from 'echarts';
import Footer from '@/components/Footer'

import '../assets/css/home.scss'; 



export class HomePage extends Component {
  constructor(props){
      super (props) ;
      this.state = {
        userinfo:{}
      }   
  }
  componentDidMount(){
      document.body.scrollTop = '0px'
      document.title = '主页'
      this.initChart()
  }
  initChart(datax,dataY){
     datax = ['7/8','7/8','7/8','7/8','7/8','7/8'];
     dataY = [100,102,123,124,220,240]

    let yMax = Math.max.apply(null, dataY)+10
    this.chartObj = echarts.init(this.chart);
    const dataShadow=[];
     for (var i = 0; i < dataY.length; i++) {
          dataShadow.push(yMax);
     }
    const option = {
        title: { },
        tooltip: {},
        xAxis: {
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
            textStyle: {
              color: '#999'
              }
            },
            data: datax
        },
         grid: {  
          top: 10,
          right:10,
         },
        yAxis: {
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            splitLine: {lineStyle:{color:'#ddd',type:'dashed'}},
            axisLabel: {
            textStyle: {
              color: '#999'
              }
            },
        },
        series: [
             { // For shadow
             type: 'bar',
                   itemStyle: {
            normal: {color: 'rgba(0,0,0,0.05)'}
                     },
                barGap:'-100%',
              barCategoryGap:'40%',
                 data: dataShadow,
                 animation: false
            },
            {
            name: '成局数',
            type: 'bar',
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    color:'#333',
                }
             },
            itemStyle:{
                normal:{
                    color: function(params){
                        var colorList = [
                            '#f9da49','#7ff4f0','#368986',"#49c18a","#f8a554","#FE8463"
                        ];
                        return colorList[params.dataIndex]
                    }
                }
            },
            data: dataY
        }]
    };
    this.chartObj.setOption(option)
}
  render(){
    const userinfo = this.state.userinfo
    return (
        <div className="page-bg">
                <div className="page-inner">
                    <div className="home-title">
                        <div className="home-title-left">
                             <img className="my-img" alt="头像" src={userinfo.face}/>
                        </div>
                        <div className="home-title-right">
                             <h3 className="welecom-txt">欢迎您!{userinfo.agentName}（）</h3>
                             <h3 className="ratio-txt">佣金比例：{userinfo.rate}</h3>
                             <div >
                                  <div className="money-txt-box">
                                      <span>今日佣金：{userinfo.rebateOfToday}</span>
                                      <span>本月佣金：{userinfo.rebateOfThisMonth}</span>
                                  </div>
                                  <div className="money-txt-box">
                                      <span>累计佣金：{userinfo.totalRebate}</span>
                                      <span>可提现佣金：{userinfo.balance}</span>
                                  </div>
                    
                             </div>
                        </div>
                    </div>
                    {/* <NoticeBar marqueeProps={{ loop:true, }}>公告：摸摸打棋牌代理后台正式上线！公告：摸摸打棋牌代理后台正式上线！
                    </NoticeBar> */}
                    <div className="home-total-bar">
                        <h3 className="clearfix bar-title">成局数统计  <span className="right"></span></h3>
                        <div className="charts-box" ref={(c)=> this.chart = c}></div>
                    </div>
                </div>
                <Footer page={'home'}></Footer>
            </div>
    )
  }
}

export function HomePageState(state, props){
    return {
    
    }
}
export function HomePageDispatch(dispach, props){
    return {}
}

export default connect(HomePageState, HomePageDispatch)(HomePage)