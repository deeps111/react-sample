import React , { Component } from 'react'
import ChildData from '../ChildData/ChildData';

class ParentComp extends Component{
    state = {login : "deeps" , pwd : "deeps"}
    render(){
        return(
            <>
                <h3>This is first Parent Component</h3>
               <ChildData content={this.state.login} pwd = {this.state.login}/>
            </>
        )
    }
}

export default ParentComp;