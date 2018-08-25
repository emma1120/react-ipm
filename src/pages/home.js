import React, {Component} from 'react'
import ReactDOM , {render} from 'react-dom'
import {connect} from 'react-redux'

export class HomePage extends Component {
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
            主页
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