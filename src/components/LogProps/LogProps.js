import React , {Component} from 'react'

const LogProps = WrappedComp => {
    return class App extends Component {
         render() {
             return(
                 <div>
                     <h3>This is HOC Component Log Props</h3>
                     <WrappedComp {...this.props}/>
                 </div>
             ) 
         }
    }
}

export default LogProps;