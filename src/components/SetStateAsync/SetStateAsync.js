import React , { Component } from 'react'

class SetStateAsync extends Component{

    state = {
        sampleItem: 'test',
      }
     handleChange = (event) => {
      
       console.log("First : "+this.state.sampleItem)    // step 1
        /*set State is Asynchronous 
            First : test
            SetStateAsync.js:16 Second test
            SetStateAsync.js:12 hooray
        */
       this.setState({                   
         sampleItem: "hooray"      // step 2
       },() => console.log(this.state.sampleItem))
      
       console.log("Second "+this.state.sampleItem)    // step 3
    };

    render () {
        return(
            <div>
                <button class="btn btn-info" onClick={this.handleChange}>Submit</button>
            </div>
        )
    }
}
 
export default SetStateAsync;