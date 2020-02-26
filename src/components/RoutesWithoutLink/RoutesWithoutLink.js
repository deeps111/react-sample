import React from 'react'
import {BrowserRouter as Router ,Switch ,Route} from 'react-router-dom'

import About from '../About/About';
import Dashboard from '../Dashboard/Dashboard';
import Home from '../Home/Home';
import Users from '../Users/Users';

const RoutesWithoutLink = () => {
    return(
        <Router>
          <Switch>                       
            <Route exact path="/" component={Home}/>
            <Route path="/users" component={Users}/> 
            {/* if switch is not used 1st matching pattern will be used
            <Route path="/users/ff" component={About}/>  --> Users Page instead of About */}            
            <Route path="/about" component={About}/>                
            <Route path="/dashboard" component={Dashboard}/>                     
          </Switch>  
        </Router>
    )
}

export default RoutesWithoutLink;