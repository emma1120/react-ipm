
import React, {Component} from 'react'
import { Route,BrowserRouter} from 'react-router-dom';

import home from '@/pages/home'
import record from '@/pages/record'
import my from '@/pages/my'
import group from '@/pages/group'

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

      <Route path='/record' component={record}/>
      <Route path='/my' component={my}/>
      <Route path='/group' component={group}/>
      </div>
    </BrowserRouter>
)

export default RouterConfig;