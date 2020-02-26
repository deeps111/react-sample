import React , {Component} from 'react';
import LogProps from '../LogProps/LogProps';

class AppSecond extends Component {
    render(){
            return(
          <div>
              <h3>This is the original Component AppSecond </h3>
          </div>
       )
    }
 };
 //const EnhancedComp = logProps(AppSecond);

 AppSecond = LogProps(AppSecond);
 export default AppSecond;