import React, {Component} from 'react'
import ReactDOM , {render} from 'react-dom'
import {connect} from 'react-redux'

export class RecordPage extends Component {
  constructor(props){
      super (props) ;
      this.state = {}   
  }
  componentDidMount(){
      document.body.scrollTop = '0px'
      document.title = '我的'
  }
  render(){
    return (
        <div>
             记录页面 
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