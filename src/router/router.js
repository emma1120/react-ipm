
import React, {Component} from 'react'
import { Route,BrowserRouter} from 'react-router-dom';

import home from '../pages/home'
import record from '../pages/record'

class Roots extends Component{
   constructor(props){
       super(props);
       this.state = {
        
       }
   }
   render() {
       return (
           <div></div>
       )
   }
}


const RouterConfig = (
    <BrowserRouter>
      <div>
      <Route exact path='/' component={home}/>
      {/* both /roster and /roster/:number begin with /roster */}
      <Route path='/record' component={record}/>
      </div>
    </BrowserRouter>
)

export default RouterConfig;