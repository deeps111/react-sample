import React , {Component} from 'react'

class RenderPropsExample extends Component {
    render() { 
        return (
            <>
               Using callbacks    :     {this.props.name()}  <br/>
            </>
        )
    }
}

export default RenderPropsExample;