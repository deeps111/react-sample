
import React , { Component } from 'react'
import RenderPropsExample from '../RenderPropsExample/RenderPropsExample';

class Child extends Component {
    render() {
        return (
            <>          
                
                Obj : {this.props.content}      
                <ul>Arr : {this.props.content1} </ul> 
                 <hr/>
                <RenderPropsExample name ={() => (
                    <div>
                    
                    <h1>test render props via calling in class |</h1>                    
                    </div>
                )}></RenderPropsExample>
               
            </>
        )
    }
}

export default Child;